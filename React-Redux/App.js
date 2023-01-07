import { useSelector } from "react-redux";
function App() {
  const state=useSelector(state=>state)
  return (

    <div className="App">
      <p>Current Balanace:{state}</p>
    </div>
  );
}

export default App;
