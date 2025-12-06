import styles from './Buttons.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../styles/animations.js'
import PropTypes from 'prop-types';

function FuncButton({ buttonLabel, buttonIcon, buttonOnClick }) {
    return (
        <motion.button {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className={styles.headerButton} onClick={buttonOnClick} >
            <svg className="icon"> <use href={buttonIcon}></use> </svg>
            <span> {buttonLabel}</span>
        </motion.button>
    )
}

FuncButton.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
    buttonOnClick: PropTypes.func.isRequired,
};

export default FuncButton