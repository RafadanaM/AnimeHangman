interface IOverlay {
  onClick?: () => void;
}

const Overlay = ({ onClick }: IOverlay) => {
  return (
    <div
      onClick={onClick}
      className=" bg-black z-40 fixed top-0 left-0 bg-opacity-50 w-screen h-screen"
    ></div>
  );
};

export default Overlay;
