import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"

function App() {

  return (
    <div className="overflow-y-auto max-h-full p-12">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
