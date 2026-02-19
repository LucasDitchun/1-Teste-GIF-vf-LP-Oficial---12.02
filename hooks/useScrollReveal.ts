import { useRef, useEffect } from 'react';

type Variant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in';

interface ScrollRevealOptions {
  variant?: Variant;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

interface ScrollRevealStaggerOptions {
  variant?: Variant;
  threshold?: number;
  rootMargin?: string;
  interval?: number;
  once?: boolean;
}

/**
 * Reveals a single element when it enters the viewport.
 * Adds `sr-hidden` + `sr-{variant}` on mount, then `sr-visible` on intersection.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    variant = 'fade-up',
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    delay = 0,
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    el.classList.add('sr-hidden', `sr-${variant}`);
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible');
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, threshold, rootMargin, delay, once]);

  return ref;
}

/**
 * Reveals children of a container with staggered delays.
 * Observes the container; when visible, adds `sr-visible` to each
 * `[data-sr-child]` element (or direct children) with incremental transitionDelay.
 */
export function useScrollRevealStagger<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealStaggerOptions = {}
) {
  const {
    variant = 'fade-up',
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    interval = 100,
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Find children: prefer [data-sr-child], fallback to direct children
    const children = container.querySelectorAll('[data-sr-child]');
    const targets = children.length > 0
      ? Array.from(children) as HTMLElement[]
      : Array.from(container.children) as HTMLElement[];

    targets.forEach((child) => {
      child.classList.add('sr-hidden', `sr-${variant}`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targets.forEach((child, i) => {
            child.style.transitionDelay = `${i * interval}ms`;
            child.classList.add('sr-visible');
          });
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [variant, threshold, rootMargin, interval, once]);

  return ref;
}
