import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

// Svelte action for fade up animation
export function fadeUp(node: HTMLElement, options: { delay?: number; duration?: number; y?: number } = {}) {
	const { delay = 0, duration = 0.8, y = 50 } = options;

	gsap.set(node, { opacity: 0, y });

	gsap.to(node, {
		opacity: 1,
		y: 0,
		duration,
		delay,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getAll().forEach(t => {
				if (t.trigger === node) t.kill();
			});
		}
	};
}

// Svelte action for fade in animation
export function fadeIn(node: HTMLElement, options: { delay?: number; duration?: number } = {}) {
	const { delay = 0, duration = 0.8 } = options;

	gsap.set(node, { opacity: 0 });

	gsap.to(node, {
		opacity: 1,
		duration,
		delay,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getAll().forEach(t => {
				if (t.trigger === node) t.kill();
			});
		}
	};
}

// Svelte action for scale up animation
export function scaleUp(node: HTMLElement, options: { delay?: number; duration?: number } = {}) {
	const { delay = 0, duration = 0.6 } = options;

	gsap.set(node, { opacity: 0, scale: 0.9 });

	gsap.to(node, {
		opacity: 1,
		scale: 1,
		duration,
		delay,
		ease: 'back.out(1.7)',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getAll().forEach(t => {
				if (t.trigger === node) t.kill();
			});
		}
	};
}

// Svelte action for slide in from left
export function slideLeft(node: HTMLElement, options: { delay?: number; duration?: number; x?: number } = {}) {
	const { delay = 0, duration = 0.8, x = -100 } = options;

	gsap.set(node, { opacity: 0, x });

	gsap.to(node, {
		opacity: 1,
		x: 0,
		duration,
		delay,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getAll().forEach(t => {
				if (t.trigger === node) t.kill();
			});
		}
	};
}

// Svelte action for slide in from right
export function slideRight(node: HTMLElement, options: { delay?: number; duration?: number; x?: number } = {}) {
	const { delay = 0, duration = 0.8, x = 100 } = options;

	gsap.set(node, { opacity: 0, x });

	gsap.to(node, {
		opacity: 1,
		x: 0,
		duration,
		delay,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getAll().forEach(t => {
				if (t.trigger === node) t.kill();
			});
		}
	};
}

// Stagger children animation
export function staggerChildren(node: HTMLElement, options: { delay?: number; stagger?: number; y?: number } = {}) {
	const { delay = 0, stagger = 0.1, y = 30 } = options;
	const children = node.children;

	gsap.set(children, { opacity: 0, y });

	gsap.to(children, {
		opacity: 1,
		y: 0,
		duration: 0.6,
		delay,
		stagger,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getAll().forEach(t => {
				if (t.trigger === node) t.kill();
			});
		}
	};
}
