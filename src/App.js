import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Corousal from "./components/Corousal";
function App() {
  const img1=require('./images/img_1.jpg')
  return (

    <div>
      <NavBar />
      <div className={styles.BasicStyle}>
        <Corousal />
      </div>
      <img src={img1} width="100" height="100" alt="Test"></img>
    </div>

  );
}

export default App;
