

import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {


  return (
    <div className='outer-pokedex'>
      <h1 id="pokedex-heading">
        <Link id='imgLink' to="/">Image List</Link>

      </h1>
      <CustomRoutes />

    </div>
  )
}

export default App
