import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./Header";
import { Top } from "./Top"
import { Footer } from "./Footer"

import { Search } from "./Search"
import { Item } from "./Item"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/search" element={<Search  />} />
          <Route path="/item" element={<Item />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </div>
  ); 
}

export default App;
