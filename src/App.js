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
  const [sort, setSort] = useState([]);
  const [order, setOrder] = useState(true);

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
      return (
        item.name.includes(findText) ||
        item.age.includes(findText) ||
        item.cv.includes(findText)
      );
    });
    setFindData(newData);
    setMode("find");
    setFindText("");
  };

  const sortAge = () => {
    const newSortAgeArray = data.sort((a, b) =>
      order ? a.age - b.age : b.age - a.age
    );
    setSort(newSortAgeArray);
    setOrder(!order);
    setMode("sortAge");
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
        sortAge={sortAge}
        sort={sort}
        order={order}
      />
    </div>
  );
}

export default App;
