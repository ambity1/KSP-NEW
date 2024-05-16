import { Placemark, Map as YMap, YMaps } from '@pbe/react-yandex-maps'
import { memo, useMemo } from 'react'

import placemarkSrc from '../../../assets/icons/placemark.svg'
import cl from './map.module.scss'

const mapState = { center: [50.287878, 57.144228], zoom: 15.5 }

const Map = () => {
	const placemarkList = useMemo(
		() => [
			{
				id: 0,
				geometry: [50.287216, 57.143623]
			},
			{
				id: 1,
				geometry: [50.288776, 57.143228]
			}
		],
		[]
	)

	return (
		<YMaps>
			<YMap className={cl.wrapper} state={mapState}>
				{placemarkList.map(({ id, geometry }) => (
					<Placemark
						key={id}
						geometry={geometry}
						options={{
							iconLayout: 'default#image',
							iconImageHref: placemarkSrc,
							iconImageSize: [45, 58],
							iconImageOffset: [-3, -42]
						}}
					/>
				))}
			</YMap>
		</YMaps>
	)
}
export default memo(Map)
