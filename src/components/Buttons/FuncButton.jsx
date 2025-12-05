import styles from './Buttons.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../styles/animations.js'

function FuncButton({ buttonLabel, buttonIcon, buttonOnClick }) {
    return (
        <>
            <motion.button {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className={styles.headerButton} onClick={buttonOnClick} >
                <svg className="icon"> <use href={buttonIcon}></use> </svg>
                <span> {buttonLabel}</span>
            </motion.button>
        </>
    )
}

export default FuncButton