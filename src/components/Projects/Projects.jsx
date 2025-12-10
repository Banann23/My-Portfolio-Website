import styles from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard.jsx'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function Projects() {

    const { t } = useTranslation();

    return (
        <>
            <div className={"titleContainer"}>
                <motion.div {...slideIn} className={"title"}> {t("projectsTitle")} </motion.div>
                <motion.div {...fadeIn} className={"subtitle"}> {t("projectsSubtitle")} </motion.div>
            </div>
            <div className={styles.projectCards}>
                <ProjectCard projectType="Front-end" projectTitle={t("projectTitle1")} projectTechstack="React, CSS, JavaScript" projectDesc={t("projectDesc1")} projectLink="https://github.com/Banann23/My-Portfolio-Website" projectLinkIcon="/sprite.svg#icon-github" projectLinkSpan={t("projectLinkSpan1")} />
                <ProjectCard projectType="Front-end" projectTitle={t("projectTitle5")} projectTechstack="React, CSS, JavaScript" projectDesc={t("projectDesc5")} projectLink="https://github.com/Banann23/JCARZZ-car-shop" projectLinkIcon="/sprite.svg#icon-github" projectLinkSpan={t("projectLinkSpan1")} />
                <ProjectCard projectType="Front-end" projectTitle={t("projectTitle3")} projectTechstack="HTML, CSS, JavaScript, Photoshop" projectDesc={t("projectDesc3")} projectLink="https://github.com/Banann23/BluCube-Rush" projectLinkIcon="/sprite.svg#icon-github" projectLinkSpan={t("projectLinkSpan1")} />
                <ProjectCard projectType="Front-end" projectTitle={t("projectTitle2")} projectTechstack="React, Tailwind CSS, JavaScript" projectDesc={t("projectDesc2")} projectLink="" projectLinkIcon="/sprite.svg#icon-github" projectLinkSpan={t("projectLinkSpan2")} />
                <ProjectCard projectType="Mobile App" projectTitle={t("projectTitle4")} projectTechstack="Flutter, Dart" projectDesc={t("projectDesc4")} projectLink="https://play.google.com/store/apps/details?id=com.hubertbanach.my_body_fit" projectLinkIcon="/sprite.svg#icon-google-play" projectLinkSpan={t("projectLinkSpan3")} />
            </div>
        </>
    )
}

export default Projects;