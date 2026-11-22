import { projects } from '../data/projects'
import { useCarousel } from '../hooks/useCarousel'
import { useLanguage } from '../hooks/useLanguage'
import type { ProjectCategory } from '../types/project'
import ProjectCard from './ProjectCard'
import styles from './ProjectSection.module.css'

type ProjectSectionProps = {
  category: ProjectCategory
}

function ProjectSection({ category }: ProjectSectionProps) {
  const { t } = useLanguage()
  const texts = t.projects[category]
  const items = projects.filter((project) => project.category === category)
  const { trackRef, activeIndex, canScroll, isAtStart, isAtEnd, scrollByItem } = useCarousel(items.length)
  const titleId = `${category}-title`

  return (
    <section id={category} className={`container ${styles.section}`} aria-labelledby={titleId}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{texts.eyebrow}</p>
          <h2 id={titleId} className={styles.title}>
            {texts.title}
          </h2>
        </div>

        {canScroll && (
          <div className={styles.controls}>
            <span className={styles.counter} aria-hidden="true">
              {activeIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              className={`${styles.arrow} ${styles.previous}`}
              aria-label={t.projects.previous}
              disabled={isAtStart}
              onClick={() => scrollByItem(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.next}`}
              aria-label={t.projects.next}
              disabled={isAtEnd}
              onClick={() => scrollByItem(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>

      {items.length > 0 ? (
        <ul ref={trackRef} className={styles.track}>
          {items.map((project) => (
            <li key={project.id} className={styles.item}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>{t.projects.emptyTitle}</p>
          <p className={styles.emptyText}>{t.projects.emptyText}</p>
        </div>
      )}
    </section>
  )
}

export default ProjectSection
