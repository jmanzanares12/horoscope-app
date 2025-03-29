import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import("./views/Home"))
const Details = lazy(() => import("./views/Details"))

function App() {

  return (
    <div className="overflow-y-auto max-h-full p-12">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:zodiac" element={<Details />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
