import { BrowserRouter, Routes, Route} from "React-router";
import Home from "./pages/Home/Home"
import './App.css'

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
