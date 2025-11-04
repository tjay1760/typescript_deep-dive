
export const Counter = ({count}: {count: number}) => {
  count+=2;
  console.log("Updated count:", count);
  return (
    <div>Count is: {count}</div>
  )
};