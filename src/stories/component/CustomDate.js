import React from 'react';
import { DatePicker, Space, TimePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
function onChange(date, dateString) {
	console.log(date, dateString);
}
const DateRangeInput = (props) => {
	return (
		<>
			<Space direction="vertical" size={12}>
				<RangePicker
					Style={{ width: '30%', float: 'left' }}
					defaultValue={[
						moment('2015/01/01', dateFormat),
						moment('2015/01/01', dateFormat),
					]}
					format={dateFormat}
				/>
			</Space>
		</>
	);
};
const Date = (props) => {
	return <DatePicker onChange={onChange} />;
};
export { DateRangeInput, Date };
