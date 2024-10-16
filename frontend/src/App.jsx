import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./Header";
import { Top } from "./Top"
import { Footer } from "./Footer"

import { Search } from "./Search"
import { Item } from "./Item"

import { Signup } from "./Signup/Signup";
import { SignupConfirm } from "./Signup/SignUpConfirm";
import { SignupComplete } from "./Signup/SingnupComplete";

import { Error } from "./Error";
import { Page404 } from "./PageNotFound";

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
          <Route path="/signupComplete" element={<SignupComplete />} />
        
          <Route path="/error" element={<Error />} />
          <Route path={`/*`} element={<Page404 />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </div>
  ); 
}

export default App;
