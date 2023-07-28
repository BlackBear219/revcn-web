import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStyles } from './AppStyle'
import { NavigationBar } from './components/NavigationBar/NavigationBar'

function App() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.navigationBar}>
          <NavigationBar></NavigationBar>
        </div>
        <div className={styles.page}>
        </div>
      </div>
    </>
  )
}

export default App
