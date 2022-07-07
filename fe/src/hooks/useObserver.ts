import { RefObject, useEffect, useRef, useState } from "react";

const useObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit  = {},
  triggers: Array<any> = []
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [observerEntry, setObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setObserverEntry(entry);
    }, {...options});
  }, [options]);

  useEffect(() => {
    if (!observerRef.current) return;
    if (!ref.current) return;
    observerRef.current.observe(ref.current);

    return () => observerRef.current?.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...triggers]);

  return observerEntry;
};
export default useObserver;
