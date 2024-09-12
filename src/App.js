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

/*
  When you click the button, the name changes to “Elvis Presley” in the console, but not in the UI. 
  This is because React doesn’t re-render the component when the state changes. 
  To make the component re-render when the state changes, you need to use the useState hook. 
  We’ll cover the useState hook in the next section.
*/