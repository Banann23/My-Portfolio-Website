import LinkButton from '../Buttons/LinkButton';
import FuncButton from '../Buttons/FuncButton';
import styles from './CVPopup.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../styles/animations.js';
import { useTranslation } from 'react-i18next';


function CVPopup() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLang = i18n.resolvedLanguage;

    const closeCV = () => {
        document.getElementsByClassName(styles.popupOverlay)[0].style.display = 'none';
    }

    const printCV = () => {
        const fileCV = currentLang === 'pl' ? '/CV_HubertBanach_pl.pdf' : '/CV_HubertBanach_en.pdf';
        window.open(fileCV, '_blank');
    };

    return (
        <>
            <div className={styles.popupOverlay}>
                <motion.span {...fadeIn} className={styles.popupClose} onClick={closeCV}>
                    <svg className="icon"> <use href={"/sprite.svg#icon-close"}></use> </svg>
                </motion.span>
                <motion.div {...fadeIn} className={styles.popupContainer}>
                    <motion.img {...fadeIn} src={currentLang === 'pl' ? '/CV_HubertBanach_pl.png' : '/CV_HubertBanach_en.png'} width="1414" height="2000" alt="Hubert Banach CV" />
                    <motion.div {...fadeIn} className={styles.popupButtons}>
                        <LinkButton buttonLink={currentLang === 'pl' ? '/CV_HubertBanach_pl.pdf' : '/CV_HubertBanach_en.pdf'} buttonIcon={"/sprite.svg#icon-download"} buttonLabel={t("popupButton1")} download />
                        <FuncButton buttonOnClick={printCV} buttonIcon={"/sprite.svg#icon-print"} buttonLabel={t("popupButton2")} />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default CVPopup;