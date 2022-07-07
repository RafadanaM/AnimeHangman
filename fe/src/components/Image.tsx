import React, { useEffect, useRef, useState } from "react";
import useObserver from "../hooks/useObserver";
interface IImage {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ src, alt, className }: IImage) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const entry = useObserver(imageRef);

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
      setImageUrl(entry.target.dataset.src!);
    }
  }, [entry]);

  return (
    <img
      ref={imageRef}
      data-src={src}
      src={imageUrl}
      alt={alt}
      className={className || ""}
    />
  );
};

export default Image;
