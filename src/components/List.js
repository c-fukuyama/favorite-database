export const List = (props) => {
  const { data, onClickDelete } = props;

  const PersonText = data.map((value, key) => (
    <div key={key} className="person-text">
      <div>
        <img src="https://placehold.jp/150x150.png" alt="" />
      </div>
      <p className="num">No,{key + 1}</p>
      <p className="name">{value.name}</p>
      <div className="flex flex-center">
        <p className="birthday">birthday:{value.birthday} </p>
        <p className="age">age:{value.age}</p>
      </div>
      <p className="cv">cv:{value.cv}</p>
      <button className="delbtn" onClick={() => onClickDelete(key)}>
        Delete
      </button>
    </div>
  ));

  return (
    <>
      <h2>推し一覧</h2>
      <div className="flex">{PersonText}</div>
    </>
  );
};
