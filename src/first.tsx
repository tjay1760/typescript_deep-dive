
export const Counter = ({count}: {count: number}) => {
  count+=2;
  console.log("Updated count:", count);
  return (
    <div>Count is: {count}</div>
  )
};

export const Mapper = ({names, positions, champion, user}: {names: string[], positions: number[], champion: string, user: {name: string, age: number, isAdmin: boolean}}) => {
  return (
    <ul>
      <h1>Showing stats for {user.name}</h1>
      {names.map((name, index) => (
        <li key={name}>
          {name} - {positions[index]} {name === champion && "(Champion)"} 
        </li>
      ))}
    </ul>
  );
};

export const AddNumbers =({a,b}: {a: number, b: number})=>{
  return(
    <div>The sum is {a + b}</div>
  )
}