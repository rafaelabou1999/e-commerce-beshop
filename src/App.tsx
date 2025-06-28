import './App.css'
import { DataContextProvider } from './DataContextProvider'
import { Homepage } from './pages/Homepage'

function App() {

  return (
    <DataContextProvider>
      <Homepage/>
    </DataContextProvider>
  )
}

export default App
