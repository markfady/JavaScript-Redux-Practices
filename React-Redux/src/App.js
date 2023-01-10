import { useDispatch, useSelector } from "react-redux";
import Products from "./Components/Products";
import { withDraw ,deposite } from "./store/actions/bankActions";
import "./App.css"

function App() {
  const state=useSelector(state=>state.bank) //Hook to access the current state of the application
  const dispatch=useDispatch();
  return (
    <> 
    <div className="App">
      <p>Current Balanace:{state}</p>
      <button onClick={()=>dispatch(withDraw(100))}>WithDraw</button>
      <button onClick={()=>dispatch(deposite(100))}>deposite</button>
    
    <Products/>
    </div>
    </>
  );
}

export default App;
