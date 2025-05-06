import './App.css'
import MyPdf from './components/myPdf/myPdf'

function App() {

  const getData1 = "test 1";
  const getData2 = "test 2";

  return (
    <>
      <MyPdf data1={getData1} data2={getData2}/>
    </>
  )
}

export default App
