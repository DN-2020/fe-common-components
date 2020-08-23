import React from 'react';
import { TimeRange, Time } from '../component/CustomTime';
import { Input } from 'antd';
export default {
	title: 'Time',
	component: Time,
};

const TimeRanges = () => <TimeRange></TimeRange>;

const Times = () => <Time></Time>;
export { TimeRanges, Times };
