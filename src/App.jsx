import "./App.css";

function ListItem({ children = undefined }) {
  return <li>{children}</li>;
}

function UnorderedList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const items = [
    "Unordered List Item 1",
    "Unordered List Item 2",
    "Unordered List Item 3",
  ];
  return (
    <>
      <div>
        <UnorderedList items={items} />
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
