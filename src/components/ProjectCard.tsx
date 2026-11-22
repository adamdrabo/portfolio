import { useLanguage } from '../hooks/useLanguage'
import type { Project } from '../types/project'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage()

  return (
    <article className={styles.card}>
      <div className={`${styles.cover} ${styles[project.theme]}`}>
        <span className={styles.platform}>{project.platform[language]}</span>
        <p className={styles.coverTitle} aria-hidden="true">
          {project.coverTitle}
        </p>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.description}>{project.description[language]}</p>

        <ul className={styles.technologies} aria-label={t.projects.technologies}>
          {project.technologies.map((technology) => (
            <li key={technology} className={styles.technology}>
              {technology}
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`${t.projects.github} (${project.name})`}
          >
            {t.projects.github}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
