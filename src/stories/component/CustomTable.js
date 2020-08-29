import React from 'react';
import { Table } from 'antd';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';

const CusTable = (props) => {
	const { column, data } = props;

	const columns = column.length !== 0 && column.map(element => {
		return {
			title: element.title,
			dataIndex: element.dataIndex,
			sorter: element.sorter != undefined ? (a, b) => a.name.length - b.name.length : null,
			onFilter: element.onFilter != undefined ? (value, record) => record.name.indexOf(value) === 0 : null,
			sortDirections: ['descend', 'ascend']
		}
	})

	const datas = data && data.map((element, index) => {
		return {
			key: index,
			...element,
		}
	})

	const onChange = (e) => {
		return e.target.value;
	}

	return (
		<Table columns={columns} dataSource={datas} onChange={onChange}></Table>
	)


}
CusTable.propTypes = {
	data: PropTypes.objectOf(PropTypes.array),
	columns: PropTypes.objectOf(PropTypes.array),

}
CusTable.defaultProps = {
	column: [
		{
			title: 'Name',
			dataIndex: 'name',
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Age',
			dataIndex: 'age',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			filters: [
				{
					text: 'London',
					value: 'London',
				},
				{
					text: 'New York',
					value: 'New York',
				},
			],
			filterMultiple: false,
			onFilter: (value, record) => record.address.indexOf(value) === 0,
			sorter: (a, b) => a.address.length - b.address.length,
			sortDirections: ['descend', 'ascend'],
		},
	],
	data: [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 32,
			address: 'London No. 2 Lake Park',
		},
	]

}
export { CusTable };
