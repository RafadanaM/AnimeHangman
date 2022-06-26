interface IEmptyKey {
  row: string;
}
const EmptyKey = ({ row }: IEmptyKey) => {
  return row === "secondRow" || row === "thirdRow" ? (
    <div className={`${row === "secondRow" ? "half" : "oneHalf"}`} />
  ) : null;
};

export default EmptyKey;
