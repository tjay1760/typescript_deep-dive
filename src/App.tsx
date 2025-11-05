import './App.css'
import { Counter, Mapper } from './first';

function App() {
  const count: number = 0;
  const firstName: string = "Vite";
  const lastName: string = "React";
  const isBoolean: boolean = true;

  let planet = "Earth";
  let isTrue = false;

  const names: string[] = ["Alice", "Bob", "Charlie", "Dave"];
  const positions: number[] = [1, 2, 3, 4];
  const champion = names[2];
  const user = { name: "Eve", age: 30, isAdmin: true };

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
      <Mapper names={names} positions={positions} champion={champion} user={user}/>
    </>
  )
}

export default App
