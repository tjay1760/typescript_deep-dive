import './App.css'
import { Counter } from './first';


function App() {
  const count: number = 0;
  const firstName: string = "Vite";
  const lastName: string = "React";
  const isBoolean: boolean = true;

  let planet = "Earth";
  let isTrue = false;


  planet = "Mars";

  return (
    <>
      <div
        className='text-3xl font-bold '
      >
        This app is powered by {firstName} and {lastName} and is {isBoolean.toString()}
        and we live in {planet}. which is {isTrue.toString()}
      </div>
      <Counter count={count} />
    </>
  )
}

export default App
