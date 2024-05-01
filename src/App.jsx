import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import ShowCount from './components/ShowCount/ShowCount';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShowCount count={count} />
      <div className="card">
        <Button onClick={() => setCount(count => count + 1)}>Sumar</Button>
        <Button onClick={() => setCount(count => count - 1)} operation="resta">
          Restar
        </Button>
      </div>
    </>
  );
}

export default App;
