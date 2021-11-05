import "../App.css";

export const Register = (props) => {
  const {
    name,
    age,
    birthday,
    cv,
    onChangeName,
    onChangeAge,
    onChangeBirthday,
    onChangeCv,
    doAction,
  } = props;

  return (
    <>
      <h2>推しを登録する</h2>
      <div className="form">
        <div>
          <input
            type="text"
            onChange={onChangeName}
            value={name}
            placeholder="名前"
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={onChangeAge}
            value={age}
            placeholder="年齢"
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={onChangeBirthday}
            value={birthday}
            placeholder="誕生日"
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={onChangeCv}
            value={cv}
            placeholder="CV"
          ></input>
        </div>
        <button className="register-button" onClick={doAction}>
          登録
        </button>
      </div>
    </>
  );
};
