import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'
import PropTypes from 'prop-types';

function ProjectCard({ projectType, projectTitle, projectTechstack, projectDesc, projectLink, projectLinkIcon, projectLinkSpan }) {
    return (
        <motion.div {...fadeIn} className={styles.projectCard}>
            <div className={styles.projectCardType}> {projectType} </div>
            <div className={styles.projectCardTitle}> {projectTitle} </div>
            <div className={styles.projectCardTechstack}> Tech Stack: {projectTechstack} </div>
            <div className={styles.projectCardDesc}> {projectDesc} </div>
            <motion.a {...fadeIn} whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.95 }} className={styles.projectCardLink} href={projectLink} target="_blank" rel="noopener noreferrer">
                <svg className="icon">
                    <use href={projectLinkIcon}></use>
                </svg>
                <span> {projectLinkSpan} </span>
            </motion.a>
        </motion.div>
    )
}

ProjectCard.propTypes = {
    projectType: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectTechstack: PropTypes.string.isRequired,
    projectDesc: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    projectLinkIcon: PropTypes.string.isRequired,
    projectLinkSpan: PropTypes.string.isRequired,
};

export default ProjectCard;