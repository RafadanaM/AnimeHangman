interface IDetail {
  rank?: number;
  score?: number;
  type?: string;
  status?: string;
  className?: string;
}
const Detail = ({ rank, score, type, status, className = "" }: IDetail) => {
  const formatStatus = status?.split("_").join(" ");
  return (
    <div
      className={`mt-4 font-bold px-1 dark:text-primary capitalize ${className}`}
    >
      {rank && (
        <div>
          Rank : <span className="font-medium">{rank}</span>
        </div>
      )}
      {score && (
        <div>
          Score : <span className="font-medium">{score}</span>
        </div>
      )}
      {type && (
        <div>
          Type : <span className="font-medium">{type}</span>
        </div>
      )}
      {status && (
        <div>
          Status : <span className="font-medium">{formatStatus}</span>
        </div>
      )}
    </div>
  );
};

export default Detail;
