import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
const contentStyle = {
	height: '50%',
	fontSize: '100px',
	background: '#5F3535',
};
function onChange(a, b, c) {
	console.log('hi');
}
function App() {
	return (
		<>
			<Button type="primary">Primary Button</Button>
			<Button>Default Button</Button>
			<Button type="dashed">Dashed Button</Button>
			<br />
			<Button type="text">Text Button</Button>
			<Button type="link">Link Button</Button>
		</>
	);
}

export default App;
