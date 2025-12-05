import styles from './Navbar.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function Navbar() {

    const { t } = useTranslation();

    return (
        <>
            <motion.nav {...fadeIn} className={styles.navbar}>
                <ul>
                    <li><motion.a {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} href="#top">{t("home")}</motion.a></li>
                    <li><motion.a {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} href="#about-me">{t("aboutMe")}</motion.a></li>
                    <li><motion.a {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} href="#skills">{t("skills")}</motion.a></li>
                    <li><motion.a {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} href="#projects">{t("projects")}</motion.a></li>
                    <li><motion.a {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} href="#contact">{t("contact")}</motion.a></li>
                </ul>
            </motion.nav>
        </>
    )
}

export default Navbar
