import styles from './Buttons.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../styles/animations.js'
import PropTypes from 'prop-types';

function LinkButton({ buttonLink, buttonLabel, buttonIcon, download }) {
    return (
        <motion.button {...fadeIn} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className={styles.headerButton} >
            <svg className="icon"> <use href={buttonIcon}></use> </svg>
            <a href={buttonLink} download={download}> {buttonLabel}</a>
        </motion.button>

    )
}

LinkButton.propTypes = {
    buttonLink: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
};

export default LinkButton