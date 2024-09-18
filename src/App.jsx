import "./App.css";

function ListItem({ children = undefined }) {
  return <li>{children}</li>;
}

function UnorderedList() {
  return (
    <div>
      <ul>
        <ListItem>Unordered List Item 1</ListItem>
        <ListItem>Unordered List Item 2</ListItem>
        <ListItem>Unordered List Item 3</ListItem>
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <UnorderedList />
        <ol>
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
          <li>Ordered List Item 3</li>
        </ol>
      </div>
    </>
  );
}

export default App;
