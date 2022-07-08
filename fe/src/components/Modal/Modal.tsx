import { ReactComponent as Close } from "../../assets/x.svg";
import Counter from "../Game/Counter/Counter";
import AnimeDetailResponse from "../../interfaces/AnimeDetailResponse.interface";

import Detail from "./Detail";
import Bottom from "./Bottom";
import Genres from "../Game/Hints/Genres";

interface IModal {
  wrongCount: number;
  maxLife: number;
  title: string;
  genres: string;
  animeDetail: AnimeDetailResponse;
  onCloseModal: () => void;
}

const Modal = ({
  wrongCount,
  maxLife,
  onCloseModal,
  title,
  genres,
  animeDetail,
}: IModal) => {
  const choosenColor =
    wrongCount < maxLife
      ? wrongCount < 2
        ? "text-success"
        : "text-warning"
      : "text-error";

  const choosenText =
    wrongCount < maxLife
      ? wrongCount < 2
        ? "Did You Cheat?!"
        : "Nice Job!"
      : "Better Luck Next Time!";

  return (
    <>
      <div
        onClick={onCloseModal}
        className="bg-black z-40 fixed top-0 left-0 bg-opacity-50 w-full h-full"
      ></div>
      <div className="fixed top-0 left-0 w-full h-full z-50 rounded-md overflow-hidden flex justify-center items-center pointer-events-none ">
        <div className="flex flex-col overflow-auto max-h-full p-4 gap-y-7 max-w-3xl bg-white dark:bg-primary-darker rounded-md relative dark:border dark:border-primary dark:border-opacity-10 pointer-events-auto">
          <Close
            onClick={onCloseModal}
            className="absolute top-3 right-3 w-7 h-7 cursor-pointer fill-secondary-darker dark:fill-primary rounded-full p-1 transition-colors duration-500 hover:bg-secondary-light  dark:hover:bg-secondary-darker"
          />
          <span className="uppercase text-center font-semibold font-mono text-2xl md:text-3xl dark:text-primary">
            {choosenText}
          </span>

          <div className="flex gap-x-4 flex-1">
            <div>
              <img
                src={animeDetail?.image}
                alt="anime"
                className="h-48 w-auto border rounded block shadow-lg shadow-secondary-darker dark:shadow-none dark:border-primary dark:border-opacity-70"
              />
              <Detail
                className="hidden md:block"
                rank={animeDetail.rank}
                score={animeDetail.mean_score}
                status={animeDetail.status}
              />
            </div>

            <div className="flex items-start flex-col flex-1 gap-y-2 ">
              <span className="font-semibold text-lg dark:text-primary">
                {"Title : "}
                <a
                  className="text-base text-accent dark:text-accent-light before:content-['_↗__'] cursor-pointer "
                  href={`https://myanimelist.net/anime/${animeDetail?.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </span>
              <Genres genres={genres} size="small" />
              <Detail
                className="block mt-0 md:hidden"
                rank={animeDetail.rank}
                score={animeDetail.mean_score}
                status={animeDetail.status}
              />
              <span className="text-sm hidden md:inline text-justify dark:text-primary">
                {animeDetail?.description}
              </span>
            </div>
          </div>
          <span className="text-sm md:hidden text-justify dark:text-primary">
            {animeDetail?.description}
          </span>
          <div className="flex divide-x-2 divide-base items-center font-semibold text-xl dark:text-primary font-mono">
            <Bottom title="Life Used">
              <span className={`text-3xl block mt-2 font-bold ${choosenColor}`}>
                {`${wrongCount} / ${maxLife}`}
              </span>
            </Bottom>
            <Bottom title="Next word">
              <Counter />
            </Bottom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
