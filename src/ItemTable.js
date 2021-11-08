import React from 'react'
import { useState } from "react/cjs/react.development";
import CompliteItemTable from "./CompliteItemTable";
import EditItemTable from "./EditItemTable";

const ItemTable = ({item, setItemTable, data}) =>{

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    return (
      <div className="itemTable">
        {item.changeMod ?
        <EditItemTable
            item={item}
            setItemTable={setItemTable}
            data={data}
            setName={setName}
            name={name}
            phone={phone}
            setPhone={setPhone}
        />
          :
          <CompliteItemTable 
            item={item}
            setItemTable={setItemTable}
            data={data}
            setName={setName}
            setPhone={setPhone}
          />
        }
      </div>
    );
  }
  
  export default ItemTable;
  