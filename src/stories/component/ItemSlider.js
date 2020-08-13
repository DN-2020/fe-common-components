import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Rate } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
const { Meta } = Card;
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
const SlideStyle = {
	height: '500',
	width: 300,
	textAlign: 'center',
};
const imageStyle = {
	verticalAlign: 'center',
};

const ItemSlide = (props) => (
	<Swiper
		height={500}
		navigation
		spaceBetween={0}
		slidesPerView={5}
		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	>
		{/* {
			(props.indexOf = (props) => {
				return <SwiperSlide style={SlideStyle}><img src="logo192.png"></img></SwiperSlide>;
			})
		} */}

		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item1.png"></img>}
			>
				<Meta
					title="[산방산/펜션] 쿠하우스 #3층독채 #흑돼지 #용머리해안"
					description="제주시"
				/>
				<Rate disabled defaultValue={2}></Rate>
			</Card>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item2.png"></img>}
			>
				<Meta
					title="[중문/리조트] 롯데 아트빌라스 켄고쿠마 B #독채 #자쿠지 #히노키 #TEA룸"
					description="중문"
				/>
				<Rate disabled defaultValue={3}></Rate>
			</Card>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item3.png"></img>}
			>
				<Meta
					title="[중문/리조트] 롯데 아트빌라스 도미니크 페로 A #독채 #수영장 #옥상정원"
					description="중문"
				/>
				<Rate disabled defaultValue={4}></Rate>
			</Card>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item4.png"></img>}
			>
				<Meta
					title="[애월/민박] 모랑모랑 스테이 #가족펜션 #전통돌집 #자쿠지 #바베큐"
					description="제주 애월"
				/>
				<Rate disabled defaultValue={5}></Rate>
			</Card>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item5.png"></img>}
			>
				<Meta
					title="[애월/펜션] 통나무파크 호텔형 #숲속힐링 #알파카 #독채"
					description="제주 애월"
				/>
				<Rate disabled defaultValue={0}></Rate>
			</Card>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item6.png"></img>}
			>
				<Meta
					title="[애월한림/게하] 아는언니집 #여성전용 #전통돌집 #혼여 #바다"
					description="제주 애월"
				/>
				<Rate disabled defaultValue={4}></Rate>
			</Card>
		</SwiperSlide>
		<SwiperSlide style={SlideStyle}>
			<Card
				hoverable
				style={{ width: 240, textAlign: 'center' }}
				cover={<img src="item7.png"></img>}
			>
				<Meta
					title="*13%할인*밴드 허클베리핀의 언플러그드 음악 여행 : 제주 2박3일"
					description="제주 애월"
				/>
				<Rate disabled defaultValue={1}></Rate>
			</Card>
		</SwiperSlide>
	</Swiper>
);

export { ItemSlide };
