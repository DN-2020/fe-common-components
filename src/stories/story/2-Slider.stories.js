import React from 'react';
import { Button } from '@storybook/react/demo';
import { Swipe } from '../component/Carousel';
import { ItemSlide } from '../component/ItemSlider';

export default {
	title: 'Swiper',
	component: Swipe,
};

const Swiper = (props) => <Swipe></Swipe>;
const ItemSwiper = (props) => <ItemSlide></ItemSlide>;
export { Swiper, ItemSwiper };
