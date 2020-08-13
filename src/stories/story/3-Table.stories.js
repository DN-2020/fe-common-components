import React from 'react';
import { Button } from '@storybook/react/demo';
import { CusTable } from '../component/CustomTable';

export default {
	title: 'Table',
	component: Button,
};

const Table = () => <CusTable></CusTable>;
export { Table };
