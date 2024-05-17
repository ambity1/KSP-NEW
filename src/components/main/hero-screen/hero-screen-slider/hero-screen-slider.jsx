import cn from 'classnames'
import { useState } from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '@components/main/hero-screen/hero-screen-slider/card'

import cl from './hero-screen-slider.module.scss'
import './hero-screen-slider.scss'
import button from "@ui/button/index.js";
import ButtonLink from "@ui/button/link/index.js";
import useMatchMedia from "@hooks/use-match-media.js";


const HeroScreenSlider = () => {
	const { isMobile, isTablet, isTabletSmall, isDesktop } = useMatchMedia()
	const [swiper, setSwiper] = useState(null)

	const banners = [
		{
			id: 0,
			title: 'Автозапчасти для KIA, Hyundai, Chevrolet',
			button: 'Смотреть каталог'
		},
		{
			id: 1,
			title: 'Автотовары в рассрочку 0%\n' +
				'через Kaspi.kz, Kaspi RED',
			button: 'К покупкам'
		},
		{
			id: 2,
			title: 'Автозапчасти для KIA, Hyundai, Chevrolet',
			button: 'Смотреть каталог'
		},
		{
			id: 3,
			title: 'Автозапчасти для KIA, Hyundai, Chevrolet',
			button: 'Смотреть каталог'
		},
	]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}
	return (
		<div className={cl.wrapper}>
			<button onClick={prevSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowLeft])} />
			<button onClick={nextSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowRight])} />
			<Swiper
				pagination={true}
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				onSwiper={(swiper) => setSwiper(swiper)}
				loop={true}
			>
				<SwiperSlide>
					<div className={cl.cardWrapper}>
						{isDesktop && <img className={cl.img} src="/assets/images/banner1.jpg" alt="" />}
						{isTablet && <img className={cl.img} src="/assets/images/banner1tablet.jpg" alt="" />}
						{isTabletSmall && <img className={cl.img} src="/assets/images/banner1tabletSmall.jpg" alt="" />}
						{isMobile && <img className={cl.img} src="/assets/images/banner1mobile.jpg" alt="" />}
						<div className={cl.contentWrapper}>
							<span className={cl.logo} />
							<h1 className={cl.title}>Автозапчасти для KIA, Hyundai, Chevrolet</h1>
							{/* <Link to='/goods-of-category'> */}
							<ButtonLink className={cl.btnLink} sizeStyle="sizeM" colorStyle="outlined" href='/goods-of-category'>
								Смотреть каталог
							</ButtonLink>
							{/* </Link> */}
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={cl.cardWrapper}>
						{isDesktop && <img className={cl.img} src="/assets/images/banner2.jpg" alt="" />}
						{isTablet && <img className={cl.img} src="/assets/images/banner2tablet.jpg" alt="" />}
						{isTabletSmall && <img className={cl.img} src="/assets/images/banner2tabletSmall.jpg" alt="" />}
						{isMobile && <img className={cl.img} src="/assets/images/banner2mobile.jpg" alt="" />}
						<div className={cl.contentWrapper}>
							{/* <span className={cl.logo} /> */}
							<h1 className={cl.titleBlack}>Автотовары в рассрочку 0% через Kaspi.kz, Kaspi RED</h1>
							{/* <Link to='/goods-of-category'> */}
							<ButtonLink className={cl.btnLinkBlack} sizeStyle="sizeM" colorStyle="outlined" href='/goods-of-category'>
								К покупкам
							</ButtonLink>
							{/* </Link> */}
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={cl.cardWrapper}>
						{isDesktop && <img className={cl.img} src="/assets/images/banner3.jpg" alt="" />}
						{isTablet && <img className={cl.img} src="/assets/images/banner3tablet.jpg" alt="" />}
						{isTabletSmall && <img className={cl.img} src="/../assets/images/banner3tabletSmall.jpg" alt="" />}
						{isMobile && <img className={cl.img} src="/assets/images/banner3mobile.jpg" alt="" />}
						<div className={cl.contentWrapper}>
							<span className={cl.logo} />
							<h1 className={cl.title}>Доставляем по Актобе
								и всему Казахстану
								любым удобным способом</h1>
							{/* <Link to='/goods-of-category'> */}
							<ButtonLink className={cl.btnLink} sizeStyle="sizeM" colorStyle="outlined" href='/goods-of-category'>
								Смотреть каталог
							</ButtonLink>
							{/* </Link> */}
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide> */}
				{/* 	<Card /> */}
				{/* </SwiperSlide> */}
				{/* <SwiperSlide> */}
				{/* 	<Card /> */}
				{/* </SwiperSlide> */}
			</Swiper>
		</div>
	)
}

export default HeroScreenSlider