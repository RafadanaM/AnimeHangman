interface IEmptyKey {
  row: string;
}
const EmptyKey = ({ row }: IEmptyKey) => {
  return row === "firstRow" || row === "secondRow" || row === "thirdRow" ? (
    <div className={`${row === "secondRow" ? "half" : row === "thirdRow" ? "oneHalf" : "quarter"}`} />
  ) : null;
};

export default EmptyKey;
