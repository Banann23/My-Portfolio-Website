import styles from './SettingButton.module.css';
import { useTheme } from "../../context/ThemeProvider.jsx"
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';


function SettingButton() {
    const { lightMode, setLightMode } = useTheme();
    const { i18n } = useTranslation();
    const currentLang = i18n.resolvedLanguage;

    const toggleLanguage = () => {
        const newLang = currentLang === 'pl' ? 'en' : 'pl';
        i18n.changeLanguage(newLang);
        localStorage.setItem('lang', newLang);
    };


    return (
        <div className={styles.settingButtons}>
            <motion.button whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.95 }} className={styles.themeSwitch} onClick={() => setLightMode(prev => !prev)}>
                <svg>
                    <use href={lightMode ? "/sprite.svg#icon-night" : "/sprite.svg#icon-day"}></use>
                </svg>
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
                className={styles.langSwitch}
                onClick={toggleLanguage}
            >
                {currentLang === 'pl' ? 'EN' : 'PL'}
            </motion.button>
        </div>
    )
}

export default SettingButton