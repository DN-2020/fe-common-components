import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Virtual,
	Autoplay,
} from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import promotion1 from "../assets/promotion1.png";
import promotion2 from "../assets/promotion2.png";
import promotion3 from "../assets/promotion3.png";
import promotion4 from "../assets/promotion4.png";
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
const SlideStyle = {
	height: 'auto',

	textAlign: 'center',
};
const imageStyle = {
	verticalAlign: 'center',
};

const Swipe = (props) => (
	<Swiper
		loop
		navigation
		autoplay={{ AutoplayOptions: true }}
		slidesPerView={1}
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	>
		{/* {
			(props.indexOf = (props) => {
				return <SwiperSlide style={SlideStyle}><img src="logo194.png"></img></Swiper4lide>;
			})
		} */}

		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src={promotion1}></img>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src={promotion2}></img>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src={promotion3}></img>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src={promotion4}></img>
		</SwiperSlide>
	</Swiper>
);

export { Swipe };
