import React from 'react';
import { Space, TimePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = TimePicker;
function onChange(time, timeString) {
	console.log(time, timeString);
}
const Time = (props) => (
	<TimePicker
		onChange={onChange}
		defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
	/>
);
const TimeRange = (props) => (
	<Space direction="vertical" size={12}>
		<RangePicker bordered={false} />
	</Space>
);
export { Time, TimeRange };
