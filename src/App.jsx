import "./App.css";

function ListItem({ name, age, desc }) {
  return (
    <li style={{ textAlign: "left" }}>
      {name} | {age} | {desc}
    </li>
  );
}

function UnorderedList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            age={item.age}
            desc={item.desc}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const items = [
    { name: "aaaa", age: "10", desc: "안녕하세요" },
    { name: "bbbb", age: "13", desc: "어서오세요" },
    { name: "cccc", age: "15", desc: "반갑습니다" },
    { name: "dddd", age: "12", desc: "어쩌죠이거" },
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
