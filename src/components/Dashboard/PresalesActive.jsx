import React, { useEffect, useState } from "react";
import { useFunctions } from "../../context/FunctionsContext";
import { useHistory } from "react-router-dom";
import { useData } from "../../context/DataContext";
import {
  Button,
  Collapse,
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { db } from "../../config/Firebase";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Popup from "./Popup";
import { makeStyles } from "@material-ui/styles";
import { useHandling } from "../../context/HandleContext";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
const Row = ({ setImages, row, i }) => {
  // Controlling Accordion
  const [open, setOpen] = useState(false);
  const data = useData();
  const { page, input, component } = {
    input: "presales",
  };
  const { setSuccess, setError } = useHandling();
  const { allInputs } = useFunctions();
  // Material UI classes
  const classes = useRowStyles();
  const value = page || input || component;
  const active = allInputs[value];
  return (
    <>
      <TableRow className={classes.root}>
        {active.editors && (
          <TableCell>
            {/* Button Handling the opening and closing of Accordion */}
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}
        <TableCell component="th" scope="row">
          {i + 1}
        </TableCell>
        {/* Looping the Array From Props to Get the Exercises */}
        {active.inputs?.map((el, i) => (
          <TableCell style={{ minWidth: 150 }} key={i}>
            {row[el.name]}
          </TableCell>
        ))}
        {active?.selects?.map((el, i) => (
          <TableCell
            style={{ minWidth: 150 }}
            className="text-capitalize"
            key={i}
          >
            {el?.params?.isId
              ? data?.[el?.params?.for].find((element) => {
                  return element.id === row[el.name]?.name;
                })?.name || "Creator Not Found"
              : row[el.name]?.name}
          </TableCell>
        ))}
        {active?.images?.map((el, i) => (
          <TableCell
            style={{ minWidth: 150 }}
            className="text-capitalize"
            key={i}
          >
            <Button
              color="primary"
              size="large"
              onClick={() => setImages(row?.[el.name])}
            >
              Preview
            </Button>
          </TableCell>
        ))}
        <TableCell align="right">
          {/* Button to Delete the Exercise */}
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              try {
                if (input) {
                  await db.collection(input).doc(row.id).set(
                    {
                      isPostsale: true,
                    },
                    { merge: true }
                  );
                  setSuccess(new Error("Presale Converted to Postsale"));
                } else {
                  throw new Error("Presale Not Found");
                }
              } catch (error) {
                setError(error);
              }
            }}
          >
            Convert To Postsale
          </Button>
        </TableCell>
      </TableRow>
      {active?.editors && (
        <TableRow>
          <TableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={
              (active?.inputs?.length || 0) + (active.selects || []).length + 3
            }
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                {row.tags && (
                  <div className="p-3">
                    <Typography variant="h6" gutterBottom component="div">
                      Tags
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Sr #</TableCell>
                          <TableCell>Tags</TableCell>
                          <TableCell>Value</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.entries(row?.tags || {})?.map(
                          (historyRow, i) => (
                            <TableRow key={i}>
                              <TableCell component="th" scope="row">
                                {i + 1}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {historyRow[0]}
                              </TableCell>
                              <TableCell>{historyRow[1]}</TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
                <div className="p-3">
                  {active?.editors?.map((el) => (
                    <div>
                      <Typography variant="h2" className="text-capitalize">
                        {el}
                      </Typography>
                      <div dangerouslySetInnerHTML={{ __html: row[el] }} />
                    </div>
                  ))}
                </div>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const PresalesActive = () => {
  const [pageNum, setPage] = useState(0);
  const data = useData();
  const { goBack } = useHistory();
  const { page, input, component } = {
    input: "presales",
  };
  const { allInputs } = useFunctions();
  const [active, setActive] = useState([]);
  const [images, setImages] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const pageData = data[page]?.data;
  const inputData = data[input];
  const componentData = data[component];
  useEffect(() => {
    if (input)
      setActive(
        inputData.filter((presale) => {
          if (typeof presale.isPostsale === "boolean")
            return !presale.isPostsale;
          if (new Date(presale.end_time).getTime() > Date.now()) return false;
          return true;
        })
      );
    else if (component) setActive([componentData]);
  }, [componentData, component, pageData, inputData, page, input]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const value = page || input || component;
  const compActive = allInputs[value];
  return (
    <div>
      <Popup
        handleClose={() => setImages(false)}
        open={images?.length && true}
        images={images}
      />
      <div className="container py-5">
        <div className="py-3">
          <IconButton onClick={() => goBack()}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </div>
        <Typography variant="h2" className="text-capitalize">
          {" "}
          {value.split("_").join(" ")}{" "}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {compActive.editors && <TableCell />}
                <TableCell> Sr # </TableCell>
                {compActive?.inputs?.map((el) => (
                  <TableCell key={Math.random()} className="text-capitalize">
                    {" "}
                    {el.name.split("_").join(" ")}{" "}
                  </TableCell>
                ))}
                {compActive?.selects?.map((el) => (
                  <TableCell key={Math.random()} className="text-capitalize">
                    {" "}
                    {el.name.split("_").join(" ")}{" "}
                  </TableCell>
                ))}
                {compActive?.images?.map((el) => (
                  <TableCell key={Math.random()} className="text-capitalize">
                    {" "}
                    {el.name.split("_").join(" ")}{" "}
                  </TableCell>
                ))}
                <TableCell align="right"> Actions </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? active?.slice(
                    pageNum * rowsPerPage,
                    pageNum * rowsPerPage + rowsPerPage
                  )
                : active
              )?.map((row, i) => {
                return <Row key={i} {...{ row, setImages, data, i }} />;
              })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={active?.length || 0}
            rowsPerPage={rowsPerPage}
            page={pageNum}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  );
};

export default PresalesActive;
