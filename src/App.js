import './App.css';

function App() {

  let name = "Sophia Loren";

  const handleClick = () => {
    name = "Elvis Presley";
    console.log(name);
  }
  
  return (
    <div className="App">
      <h1>Hello, my name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>      
    </div>
  );
}

export default App;
