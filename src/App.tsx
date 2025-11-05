import "./App.css";

function App() {
  interface Quantity {
    amount: number;
  }

  const displayQuantity = (qty: Quantity): void => {
    console.log(`The quantity is: ${qty.amount}`);
  };

  const lives: Quantity = { amount: 5 };
  const population= { country: "Kenya", amount: 7800000000 };
  const planets= { solarSystem: "Milky Way", amount: 8 };
  displayQuantity(population);
  return (
    <>
      <h1>The app</h1>
      <div> Lives: {lives.amount}</div>
      <div> Population: {population.amount}</div>
      <div> Planets: {planets.amount}</div>
    </>
  );
}

export default App;
