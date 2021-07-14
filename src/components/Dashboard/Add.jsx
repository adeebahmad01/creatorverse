import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IconButton, Paper, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import firebase, { db, storage } from "../../config/Firebase";
import { useFunctions } from "../../context/FunctionsContext";
import { useData } from "../../context/DataContext";
import Loader from "../utils/Loader";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const Add = () => {
  const { page, id, input, component } = useParams();
  const { push, goBack } = useHistory();
  const { getPages, values, components, pages, ...data } = useData();
  const { Refs, GetValues, allInputs, showSelect, showTags, showImages } =
    useFunctions();
  const {
    inputs = [],
    editors = [],
    selects = [],
    tags = [],
    images = [],
    defaultFields = {},
  } = allInputs[page || input || component] || {};
  const [inputRefs] = useState(new Refs([], inputs));
  const [editorRefs] = useState(new Refs(editors));
  const [tagRefs] = useState(new Refs([], tags));
  const [error, seterror] = useState(false);
  const [active, setActive] = useState({});
  const [imagesFiles, setImages] = useState({});
  const [selectValues, setSelects] = useState({});
  const [loading, setloading] = useState(false);
  const [disabled, setdisabled] = useState(false);
  class SelectValues {
    constructor(selects = []) {
      selects.map((el) => {
        this[el.name] = active[el.name] || "";
      });
    }
  }
  useEffect(() => {
    if (
      !values.includes(input) &&
      !pages.includes(page) &&
      !components.includes(component)
    )
      seterror(
        new Error(
          "You Are Trying to access Wrong Page Please Enter URL correctly"
        )
      );
  }, [values, pages, input, page]);
  useEffect(() => {
    let active = false;
    if (component) active = data[component];
    if (id) {
      if (page) active = data[page]?.data?.find((el) => el.id === id);
      else if (input) active = data[input]?.find((el) => el.id === id);
      else
        seterror(
          new Error(
            "Item is Deleted or Not Created Yet. Please Check You've selected right item"
          )
        );
    }
    if (active) setActive(active);
  }, [data[page]?.data, data[component], data[input], id]);
  useEffect(() => {
    setSelects({ ...new SelectValues(selects) });
  }, [active]);
  useEffect(() => {
    [...Object.values(inputRefs)].forEach((el) => {
      if (active.id) {
        el.ref.current.value = active[el.placeholder] || "";
        if (el.type?.name === "number")
          el.ref.current.value = active[el.placeholder]?.match(/\d+/g) || "";
      }
    });
    [...Object.values(tagRefs)].forEach((el) => {
      if (active.id) {
        el.ref.current.value = active?.tags?.[el.placeholder] || "";
        if (el.type?.name === "number")
          el.ref.current.value =
            active?.tags?.[el.placeholder]?.match(/\d+/g) || "";
      }
    });
  }, [active]);
  useEffect(() => {
    if (error) setTimeout(() => seterror(false), 5000);
  }, [error]);
  const docRef = input
    ? db.collection(input).doc(id || undefined)
    : page
    ? getPages(page)
        .collection("data")
        .doc(id || undefined)
    : db.collection("about").doc(`${component}:${component}`);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const value = {
        ...new GetValues(inputRefs),
        ...new GetValues(editorRefs),
        ...selectValues,
        ...defaultFields,
      };
      const batch = db.batch();
      if (!id) {
        value.time = firebase.firestore.FieldValue.serverTimestamp();
      }
      if (tags.length > 0) {
        value.tags = { ...new GetValues(tagRefs) };
      }
      if (
        editorRefs.length > 0
          ? Object.values(new GetValues(editorRefs)).find((el) => el !== "")
          : true
      ) {
        if (input || page || component) {
          if (
            values.includes(input) ||
            pages.includes(page) ||
            components.includes(component)
          ) {
            const storageRef = (i, name) =>
              storage.ref(
                `/${input || page || component}/${docRef.id}/${name}/${i}`
              );
            if (images.length > 0) {
              if (
                images
                  .map((el) => imagesFiles[el.name])
                  .filter((el) => el?.length > 0).length > 0 ||
                images.map((el) => active[el.name]).length > 0
              ) {
                for (let i = 0; i < images.length; i++) {
                  const element = images[i];
                  if (imagesFiles[element.name].length > 0) {
                    const activeImagesPrev = active[element.name] || [];
                    const randomlyGeneratedImageIds = imagesFiles[
                      element.name
                    ].map(() => Math.random().toString(36).slice(2));
                    await Promise.all(
                      imagesFiles[element.name].map((img, i) =>
                        storageRef(
                          randomlyGeneratedImageIds[i],
                          element.name
                        ).put(img)
                      )
                    );
                    const imagesURL = await Promise.all(
                      imagesFiles[element.name].map((img, i) =>
                        storageRef(
                          randomlyGeneratedImageIds[i],
                          element.name
                        ).getDownloadURL()
                      )
                    );
                    const imagesWithTypes = imagesURL.map((image, i) => ({
                      src: image,
                      type: imagesFiles[element.name][i].type.split("/")[0],
                    }));
                    value[element.name] = [
                      ...imagesWithTypes,
                      ...activeImagesPrev,
                    ];
                  } else {
                    value[element.name] = active[element.name];
                  }
                }
              } else {
                throw new Error("Please Select Files To Upload");
              }
            }
            batch.set(docRef, value, { merge: true });
            await batch.commit();
            push("/dashboard");
            return;
          } else
            throw new Error(
              "You Are Trying to access Wrong Page Please Enter URL correctly"
            );
        }
      } else {
        // If the Field Values are Empty Then Show this Error
        throw new Error("Please Enter All Values Correctly");
      }
    } catch (error) {
      setloading(false);
      seterror(error);
      console.log(error);
    }
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="py-3">
          <IconButton onClick={() => goBack()}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </div>
      </div>
      <Paper
        component="form"
        onSubmit={onSubmit}
        className="container position-relative p-3"
      >
        {loading && <Loader />}
        <Typography variant="h2" className="text-uppercase">
          {id ? "Edit" : component ? "Edit" : "Add"}{" "}
          {(page || input || component).split("_").join(" ")}
        </Typography>
        <div className="row">
          {showTags(inputRefs, active)}
          {showSelect(selects, selectValues, setSelects)}
          {showTags(tagRefs, active, false)}
          <div className="w-100"></div>
          {showImages(images, setImages, active, docRef, setdisabled)}
          <div className="w-100"></div>
          <div className="field">
            <button
              disabled={loading}
              type="submit"
              disabled={disabled}
              className="button_login mx-3"
            >
              Submit
            </button>
          </div>
          {error && <Alert severity="error">{error.message}</Alert>}
        </div>
      </Paper>
    </div>
  );
};

export default Add;
