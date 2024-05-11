import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { useStyles } from './AppStyle'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import { HomePage } from './pages/HomePage/HomePage';
import { HouseLastMetric } from './pages/HouseMetric/LastMetric/HouseLastMetric';

function App() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.navigationBar}>
          <NavigationBar></NavigationBar>
        </div>
        <div className={styles.page}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/houseMetrics" element={<HouseLastMetric />}></Route>
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
