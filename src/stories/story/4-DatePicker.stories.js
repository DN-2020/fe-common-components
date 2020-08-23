import React from 'react';
import { DateRangeInput, Date } from '../component/CustomDate';
import { Input } from 'antd';
export default {
	title: 'Date',
	component: Input,
};

const DateRange = () => <DateRangeInput></DateRangeInput>;
const DateTime = () => <Date></Date>;
export { DateRange, DateTime };
