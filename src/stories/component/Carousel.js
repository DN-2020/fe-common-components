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
				return <SwiperSlide style={SlideStyle}><img src="logo192.png"></img></SwiperSlide>;
			})
		} */}

		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src="promotion1.png"></img>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src="promotion2.png"></img>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src="promotion3.png"></img>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<img style={imageStyle} src="promotion4.png"></img>
		</SwiperSlide>
	</Swiper>
);

export { Swipe };
