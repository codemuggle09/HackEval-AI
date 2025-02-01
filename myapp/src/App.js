import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Login from "./Login"; // Import Login page

function App() {
  return (
    <Router>
      {" "}
      {/* Ensure Router wraps everything */}
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-10 px-4 sm:px-8 md:px-16">
          <Routes>
            {" "}
            {/* Move Routes here */}
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
