// import { Fragment } from "react";
import { MouseEvent, useState } from "react";
// item gọi vào là 'items' và 'heading' để kế thừa
interface Props {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void ;
}

function ListGroup({ items, heading, onSelecItem }: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //Hook
  const arr = useState(-1);
  arr[0] // Variable (selectedIndex)
  arr[1] // Update function
  //test giá trị trả về
  const handleClick = (event: MouseEvent) => console.log(event)
  // items = [];
  // const message = items.length == 0 ? <p>Not song found</p> : null
  const message = items.length == 0 && <p>Not song found</p>
  // ví dụ: true && 1 thì result là "1"
  // và nếu false && 1 thì reult là "false" 
  return (
    <>
      <h1>{heading}</h1>
      { message }
      <ul className="list-group">
        {/* Ánh xạ danh sách */
        items.map((item, index )=>
          <li 
          className={ selectedIndex === index ? "list-group-item active": "list-group-item" }
          key={item} 
            onClick={()=> {
              setSelectedIndex(index);
              onSelecItem(item); 
            }}
          >
            {item}
          </li>)}
      </ul>
    </>
  );
}

export default ListGroup;
