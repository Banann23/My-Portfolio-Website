import styles from './Footer.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <motion.footer {...fadeIn} className={styles.footerStyle}>
                <span> {t("footer")} </span>
            </motion.footer>
        </>

    )
}

export default Footer;