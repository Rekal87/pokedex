import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./features/Card";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Lorem Ipsum...</p>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
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
