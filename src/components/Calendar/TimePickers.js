import React from "react";
import {
    Descriptions,
    Button,
    Input
  } from 'antd';
  
  import 'antd/dist/antd.css';
  import { TimePicker, Space } from 'antd';

import moment from "moment";
const { RangePicker } = TimePicker;
const dateFormat = "YYYY-MM-DD";



const TimePickers = props => {
  const { size, type, value } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <RangePicker
      
    />
    
  );
};


export default TimePickers;