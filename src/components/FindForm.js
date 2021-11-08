export const FindForm = (props) => {
  const { doFind, findText, setFindText } = props;

  const onChangeText = (e) => {
    setFindText(e.target.value);
  };

  return (
    <>
      <div className="find-form">
        <input
          type="text"
          onChange={onChangeText}
          value={findText}
          placeholder="CV検索"
        ></input>
        <button onClick={doFind}>検索</button>
      </div>
    </>
  );
};
