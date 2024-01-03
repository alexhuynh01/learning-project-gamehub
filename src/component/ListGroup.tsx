// import { Fragment } from "react";

function ListGroup() {
  let items = [
    'Jazz',
    'Piano',
    'Rock',
    'Saxophone',
    'Guitar'
  ];
  // items = [];
  // const message = items.length == 0 ? <p>Not song found</p> : null
  const message = items.length == 0 && <p>Not song found</p>
  // ví dụ: true && 1 thì result là "1"
  // và nếu false && 1 thì reult là "false" 
  return (
    <>
      <h1>List Song</h1>
      { message }
      <ul className="list-group">
        {/* Ánh xạ danh sách */}
        {items.map((item, index )=>
          <li 
          className="list-group-item" 
          key={item} 
          onClick={() => console.log(item, index+1)}>
            {item}
            </li>)}
      </ul>
    </>
  );
}

export default ListGroup;
