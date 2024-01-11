import { useState } from "react";
import Alert from "./component/Alert";
import ListGroup from "./component/ListGroup";
import Button from "./component/button";


function App() {
  // items tự tạo
  let items = ["Jazz", "Piano", "Rock", "Saxophone", "Guitar"];
  let items1: string[] = [] ;

  const handleSelected = (item: string) => {
    console.log(item);
    
  }
  const [alertVisible, setAlertVisibility ] = useState(false)
  return (
    <div>
        {/* items kế thừa và heading
      <ListGroup items={items} heading="Rock" onSelecItem={handleSelected}/>
      <ListGroup items={items1} heading="Jazz" onSelecItem={handleSelected}/> */}
      {/* <Alert children=
      "Hello JavaScript"
      /> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello</Alert>}
      <Button color="secondary"  onclick={()=> setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
