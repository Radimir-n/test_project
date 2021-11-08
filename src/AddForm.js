import React from 'react'
import { useState } from "react/cjs/react.development";
import Btn from "./BtnTable";

const AddForm = ({data,setItemTable}) =>{

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [validName, setValidName] = useState(true)
    const [validPhone, setValidPhone] = useState(true)

    const click = () => {
        if(checkValid()){
            let dataTable = [...data]
            let id = dataTable[dataTable.length - 1].id + 1
            let pushData = {id:id,name:name,phone:phone, changeMod:false}
            dataTable.push(pushData)
            setItemTable(dataTable)
        }
        
    }
    const checkValid = () => {
        let result = true
        if(name === ''){
            setValidName(false)
            result = false
        } else {
            setValidName(true)
        }
        let regex = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
        if(!regex.test(phone)){
            setValidPhone(false)
            result = false
        } else {
            setValidPhone(true)
        }
        return result
    }
  return (
    <div >
        <div className='inputs'>
            {!validName && <div style={{color:'red'}}>Заполните имя</div>}
            <input className ='input_name' type="text" name="name" 
                value={name}
                placeholder={'Введите имя...'}
                onChange={(e) => setName(e.target.value)}
            />
            <div className='container_input_phone'>
            {!validPhone && <div style={{color:'red'}}>Указан неверный номер телефона</div>}
                <input  className ='input_phone' type="text" name="phone" 
                    value={phone}
                    placeholder={'Введите телефон...'}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        </div>
        <div className='form_btn'>
            <Btn 
                name={'Добавить'}
                click={() => click()}
            />
        </div>
        
    </div>
  );
}

export default AddForm;
