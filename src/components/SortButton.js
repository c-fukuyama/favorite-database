export const SortButton = (props) => {
  const { sortAge, order } = props;

  return (
    <>
      <button
        className={order ? "sort-age-btn asc" : "sort-age-btn desc"}
        onClick={sortAge}
      >
        Age
      </button>
    </>
  );
};
