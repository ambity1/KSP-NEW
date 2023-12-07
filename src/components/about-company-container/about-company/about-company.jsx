import cl from './about-company.module.scss'

const AboutCompany = () => {
	return (
		<div className={cl.wrapper}>
			<h1 className={cl.title}>О компании</h1>
			<div className={cl.contentWrapper}>
				<div className={cl.content}>
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
					<div className={cl.reviewsWrapper}>
						<div className={cl.reviews}>
							<span className={cl.reviewsTitle}>1000</span>
							<span>довольных клиентов</span>
						</div>
						<div className={cl.reviews}>
							<span className={cl.reviewsTitle}>1000</span>
							<span>довольных клиентов</span>
						</div>
						<div className={cl.reviews}>
							<span className={cl.reviewsTitle}>1000</span>
							<span>довольных клиентов</span>
						</div>
					</div>
				</div>
				<span className={cl.logo} />
			</div>
		</div>
	)
}

export default AboutCompany
