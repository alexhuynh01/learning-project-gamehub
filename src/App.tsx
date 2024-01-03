import ListGroup from "./component/ListGroup";

function App() {
  // items tự tạo
  let items = ["Jazz", "Piano", "Rock", "Saxophone", "Guitar"];
  let items1 = ["Guitar", "Piano", "Rock", "Saxophone", "Jazz"];
  return (
    <div>
      {/*  items kế thừa và heading */}
      <ListGroup items={items} heading="Rock"/>
      <ListGroup items={items1} heading="Jazz"/>

    </div>
  );
}

export default App;
