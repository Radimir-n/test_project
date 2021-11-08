import React from 'react'
import Btn from "./BtnTable";

const EditItemTable = ({item, setItemTable, data, name, setName, phone, setPhone}) =>{

    const delClick = (id) => {
        let dataTable = [...data]
        dataTable.splice(id-1, 1)
        setItemTable(dataTable)
    }
    const saveClick = (id) => {
        let dataTable = [...data]
        dataTable = dataTable.map(item => {
            if(item.id === id){
                item.name = name
                item.phone = phone
                item.changeMod = false
            }
            return item
        })
        setItemTable(dataTable)
    }

    return (
        <div className='itemTable_info'>
        <div>
            {item.id + ' '}
            <input type="text" name="name" style={{marginRight:5}}
                value={name}
                onChange={(e) => setName(e.target.value)}
            
            />
            <input type="text" name="phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div className='itemTable_btn'>
            <Btn
                name={'Сохранить'}
                click={() => saveClick(item.id)}
            />
            <Btn
                name={'Стереть'}
                click={() => delClick(item.id)}
            />
          </div>
    </div>
    );
  }
  
  export default EditItemTable;
  