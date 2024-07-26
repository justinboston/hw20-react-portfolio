import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer'; 
import styles from './app.module.css'; 

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
