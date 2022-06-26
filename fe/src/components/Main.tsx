import { useEffect, useState } from "react";
import useGame from "../hooks/useGame";
import Board from "./Game/Board";
import Keypad from "./Game/Keypad/Keypad";
import WrongTiles from "./Game/Tiles/WrongTiles";
import Modal from "./Modal/Modal";
import { ReactComponent as Loading } from "../assets/loading.svg";
import Hints from "./Game/Hints/Hints";

const Main = () => {
  const [modal, setModal] = useState(false);
  const {
    currentGuess,
    handleKeyUp,
    handleOnClick,
    wrongCount,
    history,
    status,
    max_life,
    title,
    genres,
    animeDetail,
    year,
    loading,
    media_type,
  } = useGame();

  const handleStorage = (e: StorageEvent) => {
    if (e.key && e.oldValue) {
      localStorage.setItem(e.key, e.oldValue);
    }
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("storage", handleStorage);
    };
  }, [handleKeyUp]);

  useEffect(() => {
    setModal(status === "lose" || status === "win");
  }, [status]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[1024px] 2xl:w-[1440px] max-w-full h-[calc(100%-64px)]  mx-auto gap-y-2 py-3 px-2 md:px-0">
        {loading ? (
          <Loading className="fill-current w-10 h-10 animate-spin" />
        ) : (
          <>
            <WrongTiles wrongNumber={wrongCount} maxLife={max_life} />
            <Board sentence={currentGuess} />
            <Hints genres={genres} media_type={media_type} year={year} />
            <Keypad keyHistory={history} onClick={handleOnClick} />
          </>
        )}
      </div>
      {modal && (
        <Modal
          wrongCount={wrongCount}
          maxLife={max_life}
          title={title}
          genres={genres}
          animeDetail={animeDetail}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Main;
