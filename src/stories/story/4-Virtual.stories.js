import React from 'react';
import { Button } from '@storybook/react/demo';
import { Virtual, VirtualScroll } from '../component/Virtualized';

export default {
    title: 'Virtual',
    component: Button,
};

const CusVirtual = () => <Virtual></Virtual>;
const CusVirtualScroll = () => <VirtualScroll></VirtualScroll>;
export { CusVirtual, CusVirtualScroll };
