import Button from "./Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <div>
        <p>{"<Button />"}</p>
        <Button>Default</Button>
      </div>
      <div>
        <p>{`<Button variant="outlinie"/>`}</p>
        <Button variant="outline">Default</Button>
      </div>
      <div>
        <p>{`<Button variant="text"/>`}</p>
        <Button variant="text">Default</Button>
      </div>

      <div>
        <p>{`<Button disableShadow/>`}</p>
        <Button color="primary" disableShadow>
          Default
        </Button>
      </div>

      <div className="flex">
        <div className="mr-4">
          <p>{`<Button disabled/>`}</p>
          <Button disabled>Default</Button>
        </div>
        <div className="mr-4">
          <p>{`<Button variant="text" disabled/>`}</p>
          <Button variant="text" disabled>
            Default
          </Button>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4">
          <p>{`<Button startIcon="local_grocery_store"/>`}</p>
          <Button color="primary" startIcon="asd">
            Default
          </Button>
        </div>
        <div className="mr-4">
          <p>{`<Button endIcon="local_grocery_store"/>`}</p>
          <Button color="primary" endIcon="asd">
            Default
          </Button>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4">
          <p>{`<Button size="sm" />`}</p>
          <Button color="primary" size="sm">
            Default
          </Button>
        </div>
        <div className="mr-4">
          <p>{`<Button size="md" />`}</p>
          <Button color="primary" size="md">
            Default
          </Button>
        </div>
        <div>
          <p>{`<Button size="lg" />`}</p>
          <Button color="primary" size="lg">
            Default
          </Button>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4">
          <p>{`<Button color="dafault" />`}</p>
          <Button>Default</Button>
        </div>
        <div className="mr-4">
          <p>{`<Button color="primary" />`}</p>
          <Button color="primary">Default</Button>
        </div>
        <div className="mr-4">
          <p>{`<Button color="secondary" />`}</p>
          <Button color="secondary">Default</Button>
        </div>
        <div>
          <p>{`<Button color="danger" />`}</p>
          <Button color="danger">Default</Button>
        </div>
      </div>
    </div>
  );
}
