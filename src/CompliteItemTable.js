import React from 'react'
import Btn from "./BtnTable";

const CompliteItemTable = ({item, setItemTable, data, setName, setPhone}) =>{

    const delClick = (id) => {
        let dataTable = [...data]
        dataTable.splice(id-1, 1)
        setItemTable(dataTable)
    }

    const changeClick = (id) => {
        
        let dataTable = [...data]
        dataTable = dataTable.map(item => {
            if(item.id === id){
                item.changeMod = true
                setName(item.name)
                setPhone(item.phone)
            }
            return item
        })
        setItemTable(dataTable)
        
    }
    return (
        <div className='itemTable_info'>
            {item.id + '. ' + item.name + ' ' + item.phone}
            <div className='itemTable_btn'>
            <Btn
                name={'Редактировать'}
                click={() => changeClick(item.id)}
            />
            <Btn
                name={'Стереть'}
                click={() => delClick(item.id)}
            />
            </div>
        </div>
    );
  }
  
  export default CompliteItemTable;
  