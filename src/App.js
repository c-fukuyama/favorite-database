import { useState } from "react";
import { Register } from "./components/Register";
import { List } from "./components/List";
import { usePersist } from "./Persist";
import { useFileUpload } from "use-file-upload";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cv, setCv] = useState("");
  const [previewFiles, setPreviewFiles] = useState(false);
  const [findText, setFindText] = useState("");
  const [mode, setMode] = useState("default");
  const [sort, setSort] = useState([]);
  const [ageOrder, setAgeOrder] = useState(true);
  const [birthdayOrder, setBirthdayOrder] = useState(true);

  const [data, setData] = usePersist("data", []);
  const [findData, setFindData] = usePersist("findData", []);
  const [files, setFiles] = useFileUpload();

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
      birthday: {
        month: birthday.split("/")[0],
        day: birthday.split("/")[1],
      },
      cv: cv,
      image: previewFiles ? files : "",
    };
    data.push(newData);
    setData(data);
    setName("");
    setAge("");
    setBirthday("");
    setCv("");
    setPreviewFiles(false);
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
      ageOrder ? a.age - b.age : b.age - a.age
    );
    setSort(newSortAgeArray);
    setAgeOrder(!ageOrder);
    setMode("sortAge");
  };

  const sortBirthday = () => {
    const newSortBirthdayArray = data.sort((a, b) =>
      birthdayOrder
        ? a.birthday.month - b.birthday.month || a.birthday.day - b.birthday.day
        : b.birthday.month - a.birthday.month || b.birthday.day - a.birthday.day
    );
    setSort(newSortBirthdayArray);
    setBirthdayOrder(!birthdayOrder);
    setMode("sortBirthday");
  };

  const addImage = () => {
    setFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
      console.log("Files Selected", { name, size, source, file });
      setPreviewFiles(true);
    });
  };
  const clearImage = () => {
    setPreviewFiles(false);
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
        files={files}
        addImage={addImage}
        previewFiles={previewFiles}
        clearImage={clearImage}
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
        ageOrder={ageOrder}
        sortBirthday={sortBirthday}
        birthdayOrder={birthdayOrder}
      />
    </div>
  );
}

export default App;
