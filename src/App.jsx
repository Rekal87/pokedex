import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./features/Card";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Lorem Ipsum...</p>
      <div>
        <Input />
        <Button />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
}

export default App;
