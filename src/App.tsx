
import './App.css'
import { Counter, Mapper, AddNumbers,PetShow } from './first';

function App() {
  const count: number = 0;
  const firstName: string = "Vite";
  const lastName: string = "React";
  const isBoolean: boolean = true;

  let planet = "Earth";
  const isTrue = false;

  type RGB = [number, number, number];
  type RGBA = [number, number, number, number];
  type Id = string | number;

  const names: string[] = ["Alice", "Bob", "Charlie", "Dave"];
  const positions: number[] = [1, 2, 3, 4];
  const champion = names[2];
  const user = { name: "Eve", age: 30, isAdmin: true };
  const human : [string, number, boolean] = ["Frank", 25, false];
  human[0] = "newName";
  console.log("Human Tuple:", human);

  planet = "Mars";
  interface Person {
    name: string;
    age: number;
    isAdmin: boolean;
    id: Id;
  }

  const person1: Person = {
    name: "George",
    age: 40,
    isAdmin: false,
    id: 1
  };
  const person2: Person = {
    name: "Hannah",
    age: 28,
    isAdmin: true,
    id: "2"
  };
  interface Animal {
    species: string;
    age: number;
    isPet: boolean;
    owner: Person;
    id: Id;
  }


  function getRandomColor(): RGB | RGBA {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (Math.random() > 0.5) {
      const a = Math.random().toFixed(2);
      return [r, g, b, parseFloat(a)];
    }
    return [r, g, b];
  }
    const bgColor = getRandomColor();

  const dog: Animal = {
    species: "Dog",
    age: 5,
    isPet: true,
    owner: person1,
    id: 1
  };
  const cat: Animal = {
    species: "Cat",
    age: 3,
    isPet: true,
    owner: person2,
    id: "2"
  };
  return (
    <>
      <div
        className='text-3xl font-bold '
        style={{
          backgroundColor: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}${bgColor[3] !== undefined ? `, ${bgColor[3]}` : ''})`
        }}
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
