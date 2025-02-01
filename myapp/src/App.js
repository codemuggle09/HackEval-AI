import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-10 px-4 sm:px-8 md:px-16">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
