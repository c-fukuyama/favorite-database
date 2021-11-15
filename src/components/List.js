import { FindForm } from "./FindForm";
import { SortButton } from "./SortButton";

export const List = (props) => {
  const {
    data,
    findData,
    onClickDelete,
    doFind,
    findText,
    setFindText,
    mode,
    sortAge,
    sort,
    ageOrder,
    sortBirthday,
    birthdayOrder,
  } = props;

  let list;
  if (mode === "find") {
    list = findData;
  } else if (mode === "sortAge" || mode === "sortBirthday") {
    list = sort;
  } else {
    list = data;
  }
  const defaultImage = "https://placehold.jp/150x150.png";

  const PersonList = () =>
    list.map((value, key) => (
      <div key={key} className="person-text">
        <img src={!!value.image ? value.image.source : defaultImage} alt="" />
        <p className="num">No,{key + 1}</p>
        <p className="name">{value.name}</p>
        <div className="flex flex-center">
          <p className="birthday">
            birthday:{value.birthday.month + "/" + value.birthday.day}
          </p>
          <p className="age">age:{value.age}</p>
        </div>
        <p className="cv">CV:{value.cv}</p>
        <button className="delbtn" onClick={() => onClickDelete(key)}>
          Delete
        </button>
      </div>
    ));

  return (
    <>
      <h2>推し一覧</h2>
      <FindForm
        data={data}
        doFind={doFind}
        findText={findText}
        setFindText={setFindText}
      />
      <SortButton
        sortAge={sortAge}
        data={data}
        ageOrder={ageOrder}
        sortBirthday={sortBirthday}
        birthdayOrder={birthdayOrder}
      />
      <div className="flex">
        <PersonList />
      </div>
    </>
  );
};
