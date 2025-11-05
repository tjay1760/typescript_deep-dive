import './App.css'
import { Counter, Mapper, AddNumbers,PetShow } from './first';

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
  let human : [string, number, boolean] = ["Frank", 25, false];
  human[0] = "newName";
  console.log("Human Tuple:", human);

  planet = "Mars";

  interface Animal {
    species: string;
    age: number;
    isPet: boolean;
    owner: string;
  }

  const dog: Animal = {
    species: "Dog",
    age: 5,
    isPet: true,
    owner: "Alice"
  };
  const cat: Animal = {
    species: "Cat",
    age: 3,
    isPet: true,
    owner: "Bob"
  };
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
      <AddNumbers a={positions[0]} b={positions[3]} />
      <PetShow pet={dog} />
      <PetShow pet={cat} />
    </>
  )
}

export default App
