import LinkButton from '../Buttons/LinkButton.jsx'
import FuncButton from '../Buttons/FuncButton.jsx';
import styles from './Header.module.css'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'
import style from '../CVPopup/CVPopup.module.css';

function Header() {
    const { t } = useTranslation();

    const showCV = () => {
        document.getElementsByClassName(style.popupOverlay)[0].style.display = 'flex';
    }

    return (
        <>
            <header className={styles.welcomePage} >
                <div className={styles.welcomePageText} >
                    <motion.div {...fadeIn} className={styles.welcomePageIntro}> {t("heroGreeting")} </motion.div>
                    <motion.div {...slideIn} className={styles.welcomePageName}> {t("heroTitle")} </motion.div>
                    <motion.div {...fadeIn} className={styles.welcomePageSubtitle}> {t("heroSubtitle")} </motion.div>
                    <motion.div {...fadeIn} className={styles.welcomePageDesc}> {t("heroDesc")} </motion.div>
                </div>
                <div className={styles.welcomePageButtons} >
                    <FuncButton buttonOnClick={showCV} buttonIcon={"/sprite.svg#icon-preview"} buttonLabel={t("heroButton1")} />
                    <LinkButton buttonLink="#projects" buttonIcon={"/sprite.svg#icon-folder"} buttonLabel={t("heroButton2")} />
                </div>
            </header>
        </>
    )
}

export default Header