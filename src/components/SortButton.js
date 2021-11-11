export const SortButton = (props) => {
  const { sortAge, ageOrder, sortBirthday, birthdayOrder } = props;

  return (
    <>
      <button
        className={ageOrder ? "sort-age-btn asc" : "sort-age-btn desc"}
        onClick={sortAge}
      >
        Age
      </button>
      <button
        className={
          birthdayOrder ? "sort-birthday-btn asc" : "sort-birthday-btn desc"
        }
        onClick={sortBirthday}
      >
        BirthDay
      </button>
    </>
  );
};
