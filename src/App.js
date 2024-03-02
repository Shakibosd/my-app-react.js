import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Person></Person>
        <Person name="Munna" job="Football"></Person>
        <Person age="34" jab="Cricket"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{ border: '2px solid red', margin: '5px' }}>
      <h3>My Name:- {props.name}</h3>
      <h3>My Name:- {props.age}</h3>
      <h3>My Job:- {props.job}</h3>
      <p>Hi I am</p>
      <marquee style={{ background: 'blue', color: 'yellow', borderRadius: '30px' }} behavior="" directio n="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam ratione amet velit, quaerat dolorem perferendis molestias sunt quae suscipit ipsa modi voluptates laudantium quisquam fuga laboriosam est quas eius!</marquee>
    </div>
  )
}
export default App;
