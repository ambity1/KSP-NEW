import cn from 'classnames'
import { memo } from 'react'

import Button from '@ui/button'

import cl from './about-company.module.scss'

const AboutCompany = () => {
	const aboutCompanyContentWrapperClassNames = cn([cl.aboutCompanyWrapper, 'container'])

	return (
		<div className={aboutCompanyContentWrapperClassNames}>
			<div className={cl.img} />
			<div className={cl.contentWrapper}>
				<h2 className={cl.title}>О компании</h2>
				<div className={cl.textWrapper}>
					<p>
						Мы&nbsp;специализируемся на&nbsp;продаже качественных деталей и&nbsp;компонентов для&nbsp;автомобилей
						корейского производства.
					</p>
					<p>
						Наша компания была основана в&nbsp;2018&nbsp;году и&nbsp;с&nbsp;тех пор&nbsp;мы активно развиваем свою
						деятельность на&nbsp;рынке автозапчастей. Мы&nbsp;предлагаем широкий ассортимент запчастей, включая
						двигатели, коробки передач, подвески, системы охлаждения и&nbsp;другие компоненты.
					</p>
					<p>
						Если&nbsp;вы&nbsp;ищете надёжного поставщика запчастей для&nbsp;своего корейского автомобиля,
						то&nbsp;мы&nbsp;будем рады видеть вас&nbsp;в&nbsp;числе наших клиентов.
					</p>
				</div>
				<Button className={cl.btn} sizeStyle="sizeS">
					Подробнее
				</Button>
			</div>
		</div>
	)
}

export default memo(AboutCompany)
