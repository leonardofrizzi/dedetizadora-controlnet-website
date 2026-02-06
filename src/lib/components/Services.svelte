<script lang="ts">
	import WhatsAppCTA from '$lib/components/WhatsAppCTA.svelte';
	import { fadeUp, staggerChildren } from '$lib/utils/animations';

	const services = [
		{
			title: 'Dedetização',
			description: 'Controle de baratas, formigas, moscas, mosquitos e outros insetos rasteiros e voadores.',
			icon: '🪳'
		},
		{
			title: 'Desratização',
			description: 'Eliminação e controle de ratos e camundongos com métodos seguros e eficazes.',
			icon: '🐀'
		},
		{
			title: 'Descupinização',
			description: 'Tratamento especializado contra cupins em madeiras, móveis e estruturas.',
			icon: '🪵'
		},
		{
			title: 'Controle de Aranhas',
			description: 'Identificação e eliminação de aranhas venenosas e não venenosas.',
			icon: '🕷️'
		},
		{
			title: 'Controle de Escorpiões',
			description: 'Proteção contra escorpiões com técnicas específicas e seguras.',
			icon: '🦂'
		},
		{
			title: 'Sanitização',
			description: 'Desinfecção de ambientes para eliminação de vírus, bactérias e fungos.',
			icon: '🧴'
		}
	];
</script>

<section id="servicos" class="py-24 md:py-32 bg-zinc-50">
	<div class="container mx-auto px-4 lg:px-8">
		<div class="text-center mb-16" use:fadeUp>
			<span class="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold mb-6">
				Nossos Serviços
			</span>
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Soluções <span class="text-primary">completas</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Oferecemos uma gama completa de serviços para manter seu ambiente livre de pragas
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" use:staggerChildren={{ stagger: 0.1 }}>
			{#each services as service}
				<div class="group bg-white rounded-2xl border border-zinc-200 p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
					<div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl mb-5 group-hover:bg-primary/15 transition-colors">
						{service.icon}
					</div>

					<h3 class="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
						{service.title}
					</h3>

					<p class="text-muted-foreground text-sm leading-relaxed">
						{service.description}
					</p>
				</div>
			{/each}
		</div>

		<div class="text-center mt-12">
			<WhatsAppCTA />
		</div>
	</div>
</section>
