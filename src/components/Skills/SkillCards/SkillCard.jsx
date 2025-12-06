import styles from './SkillCard.module.css';
import { motion } from 'framer-motion'
import { fadeInLeft } from '../../../styles/animations.js'
import PropTypes from 'prop-types';

function SkillCard({ skillName, skillIcon, skillLevel }) {
    return (
        <motion.li {...fadeInLeft} className={styles.skillCard}>
            <svg className="icon">
                <use href={skillIcon}></use>
            </svg>
            <div className={styles.skillDesc}>
                <span> {skillName} </span>
                <h3> {skillLevel} </h3>
            </div>
        </motion.li>
    );
}

import PropTypes from 'prop-types';

SkillCard.propTypes = {
    skillName: PropTypes.string.isRequired,
    skillIcon: PropTypes.string.isRequired,
    skillLevel: PropTypes.string.isRequired,
};

export default SkillCard;