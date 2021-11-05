import { useState } from "react";
import { Register } from "./components/Register";
import { List } from "./components/List";
import {usePersist} from "./Persist"
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cv, setCv] = useState("");

  const [data, setData] = usePersist("data",[]);

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
      <List data={data} onClickDelete={onClickDelete} />
    </div>
  );
}

export default App;
