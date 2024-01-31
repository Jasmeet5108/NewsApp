import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Newscontainer from "./components/Newscontainer"


function App() {

  const apiKey = import.meta.env.VITE_API_KEY

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          {/* India News */}
          <Route exact path="/" element={<Newscontainer apiKey={apiKey} key="general" category="general" heading="General" country="in" />} />
          <Route exact path="/entertainment" element={<Newscontainer apiKey={apiKey} key="entertainment" category="entertainment" heading="Entertainment" country="in" />} />
          <Route exact path="/business" element={<Newscontainer apiKey={apiKey} key="business" category="business" heading="Business" country="in" />} />
          <Route exact path="/health" element={<Newscontainer apiKey={apiKey} key="health" category="health" heading="Health" country="in" />} />
          <Route exact path="/science" element={<Newscontainer apiKey={apiKey} key="science" category="science" heading="Science" country="in" />} />
          <Route exact path="/sports" element={<Newscontainer apiKey={apiKey} key="sports" category="sports" heading="Sports" country="in" />} />
          <Route exact path="/technology" element={<Newscontainer apiKey={apiKey} key="technology" category="technology" heading="Technology" country="in" />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
