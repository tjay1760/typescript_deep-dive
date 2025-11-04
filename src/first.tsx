
export const Counter = ({count}: {count: number}) => {
  count+=2;
  console.log("Updated count:", count);
  return (
    <div>Count is: {count}</div>
  )
};

export const Mapper = ({names, positions}: {names: string[], positions: number[]}) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={name}>
          {name} - {positions[index]}
        </li>
      ))}
    </ul>
  );
};