import "./App.css";

function UnorderedList() {
  return (
    <div>
      <ul>
        <li>Unordered List Item 1</li>
        <li>Unordered List Item 2</li>
        <li>Unordered List Item 3</li>
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
