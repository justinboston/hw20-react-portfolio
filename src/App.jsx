import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Nav/nav";
import Footer from "./components/Footer/footer"; 

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
