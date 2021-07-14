import { createRef } from "react";

const useMultipleRefs = (refs = []) => {
  class Refs {
    constructor(refs = []) {
      refs.forEach((el) => {
        this[el.name] = {
          ref: createRef(),
          placeholder: el.name,
          ...el,
        };
      });
    }
  }
  class GetValues {
    constructor(values = {}) {
      Object.entries(values).forEach((el) => {
        this[el[0]] = `${el[1].ref.current.value}`;
      });
    }
  }
  const r = new Refs(refs);
  return [r, () => new GetValues(r)];
};

export default useMultipleRefs;
