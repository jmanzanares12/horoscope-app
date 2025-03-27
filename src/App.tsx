import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes path='/' element={<Home />} />
      </BrowserRouter>
    </div>
  )
}

export default App
