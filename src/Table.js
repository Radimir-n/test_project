import React from 'react'
import ItemTable from "./ItemTable";


const Table = ({data,setItemTable}) =>{
    
    return (
      <div>
          {data.map(item =>
            <ItemTable
                key={item.id}
                item={item}
                setItemTable={setItemTable}
                data={data}
            />
        )}
        
      </div>
    );
  }
  
  export default Table;