import "./App.css";
import { useState } from "react";

function ListItem({ name, age, desc, setDesc }) {
  const [activated, setActivated] = useState(false);
  return (
    <li
      style={{ textAlign: "left" }}
      onClick={(e) => setActivated((previous) => !previous)}
    >
      {name} | {age} |{" "}
      {activated ? (
        <>
          <input
            value={desc}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setDesc(e.currentTarget.value)}
          />
          <button onClick={(e) => setActivated((previous) => !previous)}>
            확인
          </button>
          <button onClick={(e) => setActivated((previous) => !previous)}>
            취소
          </button>
        </>
      ) : (
        <span>{desc}</span>
      )}
    </li>
  );
}

function UnorderedList({ items, setItems }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            age={item.age}
            desc={item.desc}
            setDesc={(input) => {
              const updated = [...items];
              updated[index].desc = input;
              setItems(updated);
            }}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([
    { name: "aaaa", age: "10", desc: "안녕하세요" },
    { name: "bbbb", age: "13", desc: "어서오세요" },
    { name: "cccc", age: "15", desc: "반갑습니다" },
    { name: "dddd", age: "12", desc: "어쩌죠이거" },
  ]);
  return (
    <>
      <div>
        <UnorderedList items={items} setItems={setItems} />
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
