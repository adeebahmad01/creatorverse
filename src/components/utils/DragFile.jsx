import { Snackbar, IconButton, Button, Alert } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { storage } from "../../config/Firebase";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    cursor: "pointer",
    border: (props) =>
      `3px dashed ${props.isDragActive ? theme.palette.primary.main : "#999"}`,
    padding: "2rem",
    outline: "none",
  },
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  thumb: {
    display: "inline-flex",
    borderRadius: 6,
    border: `1px solid #eaeaea`,
    marginBottom: 8,
    marginRight: 8,
    width: 120,
    height: 120,
    padding: 4,
    boxSizing: "border-box",
    position: `relative`,
  },
  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  },
  img: {
    display: "block",
    width: "auto",
    height: "100%",
  },
  delete: {
    top: 0,
    right: 0,
    position: `absolute`,
    "&:hover": {
      backgroundColor: "var(--primary) !important",
      color: "#fff",
      opacity: 1 + " !important",
    },
  },
}));

const DragFile = ({
  setImages,
  docRef,
  type = "image/*",
  name,
  size = 1,
  active = [],
  setdisabled,
}) => {
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [swap, setSwap] = useState(false);
  useEffect(() => {
    setdisabled(swap);
  }, [swap, setdisabled]);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    isDragActive,
    getInputProps,
  } = useDropzone({
    maxFiles: size - active.length,
    accept: type,
  });
  const classes = useStyles({ isDragActive });
  useEffect(() => {
    if (open) setTimeout(() => setOpen(false), 6000);
  }, [open]);
  useEffect(() => {
    if (success) setTimeout(() => setSuccess(false), 6000);
  }, [success]);
  useEffect(() => {
    setImages(acceptedFiles);
    setFiles(
      acceptedFiles.map((file, i) =>
        Object.assign(file, { src: URL.createObjectURL(file), i })
      )
    );
  }, [acceptedFiles]);
  useEffect(() => {
    if (fileRejections.length > 0) setOpen(fileRejections?.[0]?.errors[0]);
  }, [fileRejections]);
  const showThumbs = () =>
    [...active, ...files].map(({ type, src, database, ...rest }, i) => (
      <>
        <div className={classes.thumb} key={i}>
          <div className={classes.thumbInner}>
            {type.split("/")[0] === "video" ? (
              <video muted src={src} className={classes.img}>
                No Preview Available
              </video>
            ) : (
              <img src={src} alt={src} className={classes.img} />
            )}
          </div>
          <IconButton
            onClick={async () => {
              try {
                if (database) {
                  active.splice(rest.i, 1);
                  await storage.refFromURL(src).delete();
                  await docRef.set({ [name]: active }, { merge: true });
                  setSuccess(
                    new Error(`${type.split("/")[0]} deleted successfully`)
                  );
                } else {
                  acceptedFiles.splice(rest.i, 1);
                  setFiles(
                    acceptedFiles.map((file, i) =>
                      Object.assign(file, { src: URL.createObjectURL(file), i })
                    )
                  );
                  setSuccess(
                    new Error(`${type.split("/")[0]} deleted successfully`)
                  );
                }
              } catch (error) {
                setOpen(error);
              }
            }}
            className={classes.delete}
          >
            <Delete color="inherit" />
          </IconButton>
        </div>
      </>
    ));

  const handleClose = (set, reason) => {
    if (reason === "clickaway") {
      return;
    }
    set(false);
  };
  return (
    <div className="">
      <>
        {size - active.length ? (
          <div {...getRootProps({ className: classes.dropzone })}>
            <input name={name} {...getInputProps()} />
            <p>
              Drag 'n' drop some {type.split("/*").join(",")}
              {size > 1 && "s"} here, or click to select{" "}
              {type.split("/*").join(",")}
              {size > 1 && "s"}
            </p>
            <em>
              ({size} {type.split("/*").join("")}
              {size > 1 && "s"} are the maximum number of{" "}
              {type.split("/*").join(",")}
              {size > 1 && "s"} you can drop here)
            </em>
          </div>
        ) : (
          <div className={classes.dropzone}>
            <p>Maximum Files are Uploaded</p>
            <em>Delete Previous files to add new</em>
          </div>
        )}
        <aside className={classes.thumbsContainer}>
          <ul className="list-unstyled">{showThumbs()}</ul>
        </aside>
        {size > 1 && <Button onClick={() => setSwap(true)}>Arrange</Button>}
      </>
      <Snackbar
        open={open && true}
        autoHideDuration={6000}
        onClose={(e, r) => handleClose(setOpen, r)}
      >
        <Alert onClose={(e, r) => handleClose(setOpen, r)} severity="error">
          {open?.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={success && true}
        autoHideDuration={6000}
        onClose={(e, r) => handleClose(setSuccess, r)}
      >
        <Alert
          onClose={(e, r) => handleClose(setSuccess, r)}
          severity="success"
        >
          {success?.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DragFile;
