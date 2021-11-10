export const SortButton = (props) => {
  const { sortAge } = props;

  return (
    <>
      <button onClick={sortAge}>Age</button>
    </>
  );
};
