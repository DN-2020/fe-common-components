import React , {useState}from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { action } from '@storybook/addon-actions';


const InputBox = () => {

  
  const [info , setinfo] = useState("")
  const onChange = e => {
    setinfo(e.currentTarget.value)
  };
  
  const submit = () => {
    console.log(info)
  };
  

 return(
  <>
  <Input.Group style ={{width : "25%"}}>
    <Input.Search enterButton 
     placeholder="name" allowClear onChange={onChange} onSearch = {action('submit')}
     size = "middle" 
     value = {info}/>
    </Input.Group>
      </>
)}

export default InputBox