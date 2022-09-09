import Skeleton from "react-loading-skeleton";

interface IDetail {
  rank?: number;
  score?: number;
  type?: string;
  status?: string;
  className?: string;
  isLoading: boolean;
}
const Detail = ({
  rank,
  score,
  type,
  status,
  isLoading,
  className = "",
}: IDetail) => {
  const formatStatus = status?.split("_").join(" ");

  const renderDetail = (title: string, data: string | number | undefined) => {
    return !isLoading ? (
      <div>
        {title} : <span className="font-medium">{data}</span>
      </div>
    ) : (
      <Skeleton />
    );
  };
  return (
    <div
      className={`mt-4 font-bold px-1 dark:text-primary capitalize ${className}`}
    >
      {renderDetail("Rank", rank)}
      {renderDetail("Score", score)}
      {renderDetail("Type", type)}
      {renderDetail("Status", formatStatus)}
    </div>
  );
};

export default Detail;
