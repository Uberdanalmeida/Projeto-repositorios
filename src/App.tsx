import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

function App() {
  return(
    <div className={classes.app}>
      <h1>Repositorios GitHub</h1>
      <Outlet/>
    </div>

  )
}

export default App