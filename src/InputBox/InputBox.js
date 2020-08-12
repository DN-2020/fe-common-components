import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';


const onChange = e => {
  console.log(e);
};

const InputBox = () => {
  
 return(
  <>
  <Input.Group style ={{width : "18%" , marginTop : "10%" , marginLeft : "10%"}}>
    <Input.Search enterButton style={{verticalAlign:'middle'}}  placeholder="name" allowClear onChange={onChange} size = "middle" width = "50%" />
    </Input.Group>
      </>
)}

export default InputBox