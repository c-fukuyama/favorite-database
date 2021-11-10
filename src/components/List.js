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
    order,
  } = props;

  const PersonText = data.map((value, key) => (
    <div key={key} className="person-text">
      <div>
        <img src="https://placehold.jp/150x150.png" alt="" />
      </div>
      <p className="num">No,{key + 1}</p>
      <p className="name">{value.name}</p>
      <div className="flex flex-center">
        <p className="birthday">birthday:{value.birthday}</p>
        <p className="age">age:{value.age}</p>
      </div>
      <p className="cv">CV:{value.cv}</p>
      <button className="delbtn" onClick={() => onClickDelete(key)}>
        Delete
      </button>
    </div>
  ));

  const FindPersonText = findData.map((value, key) => (
    <div key={key} className="person-text">
      <div>
        <img src="https://placehold.jp/150x150.png" alt="" />
      </div>
      <p className="num">No,{key + 1}</p>
      <p className="name">{value.name}</p>
      <div className="flex flex-center">
        <p className="birthday">birthday:{value.birthday}</p>
        <p className="age">age:{value.age}</p>
      </div>
      <p className="cv">CV:{value.cv}</p>
      <button className="delbtn" onClick={() => onClickDelete(key)}>
        Delete
      </button>
    </div>
  ));

  const SortAgePersonText = sort.map((value, key) => (
    <div key={key} className="person-text">
      <div>
        <img src="https://placehold.jp/150x150.png" alt="" />
      </div>
      <p className="num">No,{key + 1}</p>
      <p className="name">{value.name}</p>
      <div className="flex flex-center">
        <p className="birthday">birthday:{value.birthday}</p>
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
      <SortButton sortAge={sortAge} data={data} order={order} />
      {mode === "default" && <div className="flex">{PersonText}</div>}
      {mode === "find" && <div className="flex">{FindPersonText}</div>}
      {mode === "sortAge" && <div className="flex">{SortAgePersonText}</div>}
    </>
  );
};
