import React from 'react'
import AddForm from "./AddForm";
import { useState } from "react/cjs/react.development";
import Table from "./Table";
import { useEffect } from "react";

const data = [
  {id:1, name: 'Иван', phone:+79854553, changeMod:false},
  {id:2, name: 'Кирилл', phone:+7923653, changeMod:false},
  {id:3, name: 'Влад', phone:+796981553, changeMod:false},
  {id:4, name: 'Оля', phone:+79873453, changeMod:false}

]
// const url ='https://jsonplaceholder.typicode.com/todos/1'

const App = () =>{
  const [itemTable, setItemTable] = useState(data)

  useEffect(() => {
    ///// Запрос через ajax
    // const request = new XMLHttpRequest();
    // request.open('GET', url, false);
    // request.send();
    // if (request.status !== 200) {
    //   console.log( request.status + ': ' + request.statusText );
    // } else {
    //   console.log(JSON.parse(request.responseText));
    //   setItemTable(JSON.parse(request.responseText))
    // }

    
    ///// Запрос через fetch
    // fetch(url)
    // .then(response => response.json())
    // .then(json => setItemTable(json))
  },[])

  return (
    <div className="App">
      <Table 
        data={itemTable}
        setItemTable={setItemTable}
      />
      <AddForm
        data={itemTable}
        setItemTable={setItemTable}
      />
    </div>
  );
}

export default App;
