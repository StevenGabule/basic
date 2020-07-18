import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "Python",
    yearExperienced: 0,
    isEmployed: false,
    name: ""
  });

  React.useEffect(() => {
    document.title =  developer.name;
  }, [developer.name])

  function handleChangeLanguage() {
    setDeveloper({
      language: "Javascript",
      yearExperienced: 0,
    });
  }

  function handleChangeExperience(e) {
    setDeveloper({
      ...developer,
      yearExperienced: e.target.value,
    });
  }

  function handleChangeName(e) {
      setDeveloper({
          ...developer,
          name: e.target.value
      })
  }

  function handleToggleEmployed() {
    setDeveloper(prevState => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }

  return (
    <div id={"app"}>
      <button onClick={handleToggleEmployed}>Toggle employment Status</button>
      <button onClick={handleChangeLanguage}>Change language</button>
      <div>
        <input type="text" placeholder='Enter a name' onChange={handleChangeName} />
        <input type="number" onChange={handleChangeExperience} />
      </div>
      <p>Developer Name: {developer.name}</p>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearExperienced} years of experienced</p>
      <p>Is employed: {developer.isEmployed ? 'Yep': 'Nope'}</p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
