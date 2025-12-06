import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './LangPopup.module.css';

const LanguagePopup = () => {
    const [show, setShow] = useState(false); // na początku nie pokazujemy
    const { i18n } = useTranslation();

    // Sprawdzenie, czy użytkownik już wybrał język
    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (!savedLang) {
            setShow(true); // pokaż popup jeśli brak wyboru
        } else {
            i18n.changeLanguage(savedLang);
        }
    }, []);

    const chooseLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={styles.popupOverlay}>
            <motion.div
                className={styles.popupContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                <p>Wybierz język / Choose your language:</p>
                <div className={styles.popupButtons}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => chooseLanguage('pl')}>Polski</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => chooseLanguage('en')}>English</motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default LanguagePopup;