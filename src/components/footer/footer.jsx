import cn from 'classnames'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import cl from './footer.module.scss'
import Navigation from './navigation'

// import logo from '../../../assets/images/footer-logo-1.png'
// import logo from '../../../assets/images/footer-logo-2.png'

const Footer = () => {
	const footerContentWrapperClassNames = cn([cl.footerContentWrapper, 'container'])
	const copyrightContentWrapperClassNames = cn([cl.copyrightContentWrapper, 'container'])
	return (
		<footer>
			<div className={cl.footer}>
				<div className={footerContentWrapperClassNames}>
					<Link className={cl.logo} to="/">
						<img className={cl.first} src="/assets/images/footer-logo-1.png" alt="" />
						<img className={cl.second} src="/assets/images/footer-logo-2.png" alt="" />
					</Link>
					<Navigation />
				</div>
				<div className={cl.copyright}>
					<div className={copyrightContentWrapperClassNames}>
						<Link className={cl.copyrightLink} to="/privacy-policy" target="_blank">
							Политика конфиденциальности
						</Link>
						<Link className={cl.copyrightLink} to="https://ambity.ru" target='_blank'>
							Разработка сайта - <span style={{textDecoration: "underline"}}>Амбити</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default memo(Footer)
