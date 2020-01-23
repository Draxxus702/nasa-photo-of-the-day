import React from "react";
import "./App.css";
import Page from './Page';
import Header from './Header'

function App() {
  return (
    <div className="App">
     <div>
     <Header/>
       </div> 
       <Page/>
    </div>
  );
}

export default App;




// useEffect(() => {
//   axios
//   .get("https://ghibliapi.herokuapp.com/films/")
//   .then(response => {
//     console.log(response.data);
//     setFilms(response.data);
//   })
//   .catch(error => {
//     console.log("the data was not returned", error);
//   });
// }, []);