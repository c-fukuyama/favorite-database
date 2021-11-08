import { useState } from "react";
import { Register } from "./components/Register";
import { List } from "./components/List";
import { usePersist } from "./Persist";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cv, setCv] = useState("");
  const [findText, setFindText] = useState("");
  const [mode, setMode] = useState("default");

  const [data, setData] = usePersist("data", []);
  const [findData, setFindData] = usePersist("findData", []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const onChangeCv = (e) => {
    setCv(e.target.value);
  };

  const doAction = () => {
    const newData = {
      name: name,
      age: age,
      birthday: birthday,
      cv: cv,
    };
    data.push(newData);
    setData(data);
    setName("");
    setAge("");
    setBirthday("");
    setCv("");
  };

  const onClickDelete = (key) => {
    const newData = [...data];
    newData.splice(key, 1);
    setData(newData);
  };

  const doFind = () => {
    const newData = data.filter((item, key) => {
      return item.cv.includes(findText);
    });
    setFindData(newData);
    setMode("find");
    setFindText("");
  };

  return (
    <div className="App">
      <h1>推しデータベース</h1>
      <Register
        name={name}
        age={age}
        birthday={birthday}
        cv={cv}
        onChangeName={onChangeName}
        onChangeAge={onChangeAge}
        onChangeBirthday={onChangeBirthday}
        onChangeCv={onChangeCv}
        doAction={doAction}
      />
      <List
        data={data}
        findData={findData}
        onClickDelete={onClickDelete}
        doFind={doFind}
        findText={findText}
        setFindText={setFindText}
        mode={mode}
      />
    </div>
  );
}

export default App;
