import styles from './AboutMeCards.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function AboutMeCards() {
    const { t } = useTranslation();

    return (
        <div className={styles.amCardsContainer}>
            <div className={styles.amCards}>
                <motion.div {...fadeIn} className={styles.amCard}>
                    <div className={styles.amCardTitle}>
                        <svg className='Icon'>
                            <use href="/sprite.svg#icon-school"></use>
                        </svg>
                        <div> {t("aboutMeCardTitle1")} </div>
                    </div>
                    <span> {t("aboutMeCardContent1P1")} <br /></span>
                    <span> {t("aboutMeCardContent1P2")} </span>
                </motion.div>
                <motion.div {...fadeIn} className={styles.amCard}>
                    <div className={styles.amCardTitle}>
                        <svg className='Icon'>
                            <use href="/sprite.svg#icon-language"></use>
                        </svg>
                        <div> {t("aboutMeCardTitle2")} </div>
                    </div>
                    <span> {t("aboutMeCardContent2P1")} <br /></span>
                    <span> {t("aboutMeCardContent2P2")} </span>
                </motion.div>
            </div>
            <div className={styles.amCards}>
                <motion.div {...fadeIn} className={styles.amCard}>
                    <div className={styles.amCardTitle}>
                        <svg className='Icon'>
                            <use href="/sprite.svg#icon-interests"></use>
                        </svg>
                        <div> {t("aboutMeCardTitle3")} </div>
                    </div>
                    <span> {t("aboutMeCardContent3P1")} <br /></span>
                    <span> {t("aboutMeCardContent3P2")} <br /></span>
                    <span> {t("aboutMeCardContent3P3")} </span>
                </motion.div>
                <motion.div {...fadeIn} className={styles.amCard}>
                    <div className={styles.amCardTitle}>
                        <svg className='Icon'>
                            <use href="/sprite.svg#icon-favorite"></use>
                        </svg>
                        <div> {t("aboutMeCardTitle4")} </div>
                    </div>
                    <span> {t("aboutMeCardContent4")} <br /></span>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMeCards;