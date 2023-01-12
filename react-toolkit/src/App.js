import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { deposite, withDraw } from './slices/bankSlice';
function App() {
    const state=useSelector(state=>state.bank);
    const dispatch=useDispatch()
  return (
    <div className="App">
        <p>bank account:{state}</p>
        <button onClick={()=>dispatch(withDraw(100))}>Withdarw</button>
        <button onClick={()=>dispatch(deposite(100))}>Deposite</button>
    </div>
  );
}

export default App;
