import { MutableRefObject } from "react";

const isMutableRefObject = <T>(thing: any): thing is MutableRefObject<T> =>
  (thing as MutableRefObject<T>) !== undefined;

// https://www.davedrinks.coffee/how-do-i-use-two-react-refs/
//
export const mergeRefs = <T>(...refs: React.Ref<T>[]) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 1) return filteredRefs[0];

  return (inst: T) => {
    for (const ref of filteredRefs) {
      if (typeof ref === "function") {
        ref(inst);
      } else if (isMutableRefObject<T>(ref)) {
        ref.current = inst;
      }
    }
  };
};
