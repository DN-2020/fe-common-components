import React from "react";
import {
    Descriptions,
    Button,
    Input
  } from 'antd';
  
  import 'antd/dist/antd.css';
  import { DatePicker, Space } from 'antd';

import moment from "moment";
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";


/**
 * DatePicker
 */
const RangePickers = props => {
  const { size, type, value } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    
  );
};


export default RangePickers;