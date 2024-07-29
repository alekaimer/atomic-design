import styles from './App.module.css'
import { HomePage } from './components/pages/HomePage'

function App() {

  return (
    <div id='main' className={styles.main}>
      <HomePage />
    </div>
  )
}

export default App
