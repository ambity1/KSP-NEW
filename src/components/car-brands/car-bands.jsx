import chevrolet from '@assets/icons/chevrolet-logo.svg'
import hyundai from '@assets/icons/hyundai-logo.svg'
import kia from '@assets/icons/kia-logo.svg'
import cn from 'classnames'
import { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './car-brands.module.scss'

const CarBands = () => {
	const brandsList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				imgPath: kia
			},
			{
				id: 1,
				href: '/',
				imgPath: hyundai
			},
			{
				id: 2,
				href: '/',
				imgPath: chevrolet
			}
		],
		[]
	)
	const carBandsContentWrapperClassNames = cn([cl.wrapper, 'container'])

	return (
		<div className={carBandsContentWrapperClassNames}>
			<h2 className={cl.title}>Марки автомобилей</h2>
			<div className={cl.brandsList}>
				{brandsList.map(({ href, id, imgPath }) => (
					<div className={cl.brandItem} key={id}>
						<Link to={href}>
							<img src={imgPath} alt="" className={cl.imgLogo} />
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default memo(CarBands)
