import './App.css';

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>
}

function RegularComponent() {
  <h1>Everyone can see this component.</h1>
}
function App() {
  return <div className="App">Components here eventually</div>;
}

export default App;


// <></> is fragment in place of <div></div>