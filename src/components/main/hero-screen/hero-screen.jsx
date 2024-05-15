import cn from 'classnames'

import HeroScreenSlider from '@components/main/hero-screen/hero-screen-slider'
import Selection from '@components/main/hero-screen/selection'

import cl from './hero-screen.module.scss'

const HeroScreen = () => {
	const heroScreenContentWrapperClassNames = cn([cl.wrapper, 'container'])
	return (
		<div className={heroScreenContentWrapperClassNames}>
			{/* <Selection /> */}
			<HeroScreenSlider />
		</div>
	)
}

export default HeroScreen
