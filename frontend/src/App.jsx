import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./Header";
import { Top } from "./Top"
import { Footer } from "./Footer"

import { Search } from "./Search"
import { Item } from "./Item"

import { Signup } from "./Signup/Signup";
import { SignupConfirm } from "./Signup/SignUpConfirm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item" element={<Item />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupConfirm" element={<SignupConfirm />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </div>
  ); 
}

export default App;
