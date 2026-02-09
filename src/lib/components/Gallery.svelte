<script lang="ts">
	import WhatsAppCTA from '$lib/components/WhatsAppCTA.svelte';
	import { fadeUp, staggerChildren } from '$lib/utils/animations';
	import gallery1 from '$lib/assets/gallery-1.webp';
	import gallery2 from '$lib/assets/gallery-2.webp';
	import gallery3 from '$lib/assets/gallery-3.webp';
	import gallery4 from '$lib/assets/gallery-4.webp';
	import gallery5 from '$lib/assets/gallery-5.webp';
	import gallery6 from '$lib/assets/gallery-6.webp';

	const projects = [
		{ image: gallery1, alt: 'Dedetização residencial' },
		{ image: gallery2, alt: 'Controle de pragas comercial' },
		{ image: gallery3, alt: 'Serviço em residência' },
		{ image: gallery4, alt: 'Dedetização externa' },
		{ image: gallery5, alt: 'Tratamento de ambiente' },
		{ image: gallery6, alt: 'Sanitização profissional' }
	];

	let lightboxOpen = $state(false);
	let currentIndex = $state(0);

	function openLightbox(index: number) {
		currentIndex = index;
		lightboxOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		lightboxOpen = false;
		document.body.style.overflow = '';
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % projects.length;
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!lightboxOpen) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowRight') nextImage();
		if (e.key === 'ArrowLeft') prevImage();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<section id="galeria" class="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
	<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

	<div class="container mx-auto px-4 lg:px-8">
		<div class="text-center mb-16" use:fadeUp>
			<span class="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold mb-6">
				Nossos Projetos
			</span>
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Galeria de <span class="text-primary">trabalhos</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Confira alguns dos nossos serviços realizados em residências, comércios e indústrias
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" use:staggerChildren={{ stagger: 0.1 }}>
			{#each projects as project, i}
				<button
					type="button"
					onclick={() => openLightbox(i)}
					aria-label="Ver imagem {i + 1}"
					class="group bg-white rounded-2xl border border-zinc-200 p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 cursor-pointer text-left"
				>
					<div class="relative aspect-[4/3] rounded-xl overflow-hidden">
						<img src={project.image} alt={project.alt} class="w-full h-full object-cover" />

						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
							<div class="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
									<circle cx="11" cy="11" r="8"/>
									<path d="m21 21-4.3-4.3"/>
									<path d="M11 8v6"/>
									<path d="M8 11h6"/>
								</svg>
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>

		<div class="text-center mt-12">
			<WhatsAppCTA text="Ver Mais Trabalhos" message="Olá! Gostaria de ver mais trabalhos realizados." />
		</div>
	</div>
</section>

{#if lightboxOpen}
	<div
		class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
		role="dialog"
		aria-modal="true"
	>
		<button
			type="button"
			onclick={closeLightbox}
			aria-label="Fechar"
			class="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M18 6 6 18"/>
				<path d="m6 6 12 12"/>
			</svg>
		</button>

		<div class="absolute top-4 left-4 text-white/70 text-sm font-medium">
			{currentIndex + 1} / {projects.length}
		</div>

		<button
			type="button"
			onclick={prevImage}
			aria-label="Imagem anterior"
			class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="m15 18-6-6 6-6"/>
			</svg>
		</button>

		<div class="w-full max-w-4xl mx-4 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
			<img src={projects[currentIndex].image} alt={projects[currentIndex].alt} class="w-full h-full object-cover" />
		</div>

		<button
			type="button"
			onclick={nextImage}
			aria-label="Próxima imagem"
			class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="m9 18 6-6-6-6"/>
			</svg>
		</button>

		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
			{#each projects as project, i}
				<button
					type="button"
					onclick={() => currentIndex = i}
					aria-label="Ir para imagem {i + 1}"
					class="w-16 h-12 rounded-lg overflow-hidden border-2 transition-all {i === currentIndex ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-80'}"
				>
					<img src={project.image} alt={project.alt} class="w-full h-full object-cover" />
				</button>
			{/each}
		</div>

		<button
			type="button"
			onclick={closeLightbox}
			class="absolute inset-0 -z-10"
			aria-label="Fechar galeria"
		></button>
	</div>
{/if}
