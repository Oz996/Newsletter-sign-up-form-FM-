import { Route, Routes } from "react-router-dom"
import Subscribe from "./pages/Subscribe"
import Success from "./pages/Success"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>

  )
}

export default App