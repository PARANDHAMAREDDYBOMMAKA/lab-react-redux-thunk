import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getData } from './redux/Action'


function App() {

  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  return (
    <div className="App">
    {
      data.map((el, i) => (
        <div key={i} className='data-container'>
        <h2>{el.name}</h2>
        <p>{el.email}</p>
        </div>
      ))
    }
      <button onClick={() => dispatch(getData())}>FETCH DATA</button>
    </div>
  )
}

export default App