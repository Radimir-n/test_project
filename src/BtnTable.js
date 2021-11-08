import React from 'react'

const Btn = ({name, click}) =>{

    return (
        <button onClick ={(id) => click(id)}>
            {name}
        </button>
    );
  }
  
  export default Btn;
  