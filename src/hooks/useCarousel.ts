import { useEffect, useRef, useState } from 'react'

function getStep(track: HTMLElement): number {
  const firstItem = track.firstElementChild
  if (!(firstItem instanceof HTMLElement)) {
    return 0
  }
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0
  return firstItem.offsetWidth + gap
}

export function useCarousel(itemCount: number) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScroll, setCanScroll] = useState(false)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    function update() {
      if (!track) {
        return
      }
      const step = getStep(track)
      setCanScroll(track.scrollWidth > track.clientWidth + 1)
      setIsAtStart(track.scrollLeft <= 1)
      setIsAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1)
      setActiveIndex(step > 0 ? Math.round(track.scrollLeft / step) : 0)
    }

    track.addEventListener('scroll', update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(track)

    return () => {
      track.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [itemCount])

  function scrollByItem(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) {
      return
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * getStep(track), behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return { trackRef, activeIndex, canScroll, isAtStart, isAtEnd, scrollByItem }
}
