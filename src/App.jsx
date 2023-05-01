import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './List'
import data from './data'

function App() {
  const [People, setCount] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{People.length} birthdays today</h3>
        <List people={People} />
        <button type='button' className='btn btn-block' onClick={() => setCount
        ([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App
