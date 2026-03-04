import { memo, ReactNode } from "react";

interface ITile {
  children?: ReactNode;
  className?: string;
  withBorder?: boolean;
  isFirstWord?: boolean;
}

const Tile = ({
  children,
  className,
  withBorder = true,
  isFirstWord = false,
}: ITile) => {
  return (
    <div
      className={`flex h-14 md:h-20 items-center justify-center rounded-md dark:text-primary font-bold ${
        withBorder
          ? `w-10 md:w-16 bg-primary text-xl md:text-2xl ${
              isFirstWord ? " border-4" : "border"
            } border-secondary-darker dark:border-accent`
          : "w-5 text-2xl md:text-4xl"
      }   ${className || ""}`}
    >
      {children && children}
    </div>
  );
};

export default memo(Tile);
