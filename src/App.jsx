import { Outlet } from "react-router-dom";
import "/src/App.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer"; 

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      
      <Outlet />

      <Footer />
    </div>
  );h 
}

export default App;
