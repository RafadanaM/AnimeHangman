import Overlay from "../Overlay";

const ErrorModal = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Overlay></Overlay>
      <div className="fixed top-0 left-0 w-full h-full z-50 rounded-md overflow-hidden flex justify-center items-center pointer-events-none ">
        <div className="flex flex-col overflow-auto max-h-full p-4 gap-y-7 max-w-3xl bg-white dark:bg-primary-darker rounded-md relative dark:border dark:border-primary dark:border-opacity-10 pointer-events-auto">
          <p className="font-bold text-xl whitespace-pre-wrap">
            An Error has Occured
          </p>
          <button
            onClick={handleClick}
            className="bg-black text-white capitalize font-semibold rounded-md py-1"
          >
            Clear Data & Refresh
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
