import Alert from "./component/Alert";
import ListGroup from "./component/ListGroup";


function App() {
  // items tự tạo
  let items = ["Jazz", "Piano", "Rock", "Saxophone", "Guitar"];
  let items1: string[] = [] ;

  const handleSelected = (item: string) => {
    console.log(item);
  }
  return (
    <div>
       {/* items kế thừa và heading
      <ListGroup items={items} heading="Rock" onSelecItem={handleSelected}/>
      <ListGroup items={items1} heading="Jazz" onSelecItem={handleSelected}/> */}
      <Alert children=
      "Hello JavaScript"
      />
    </div>
  );
}

export default App;
