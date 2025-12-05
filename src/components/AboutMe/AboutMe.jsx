import styles from './AboutMe.module.css'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function AboutMe() {
    const { t } = useTranslation();

    return (
        <>
            <motion.div {...slideIn} className={"title"}> <span> {t("aboutMeTitle")} </span> </motion.div>
            <motion.div {...fadeIn} className={styles.amText}>
                <div {...fadeIn}>
                    {t("aboutMeTextP1")}
                    <span className={"textBold"}> Hubert </span>
                    {t("aboutMeTextP2")}
                    <span className={"textBold"}> Collegium da Vinci </span>
                    {t("aboutMeTextP3")}
                    <div className={styles.amEnd}> {t("aboutMeEnd")} </div>
                </div>
            </motion.div >
        </>
    )
}

export default AboutMe
