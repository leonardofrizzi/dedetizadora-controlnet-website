<script lang="ts">
	import { fadeUp, staggerChildren } from '$lib/utils/animations';

	const testimonials = [
		{
			name: 'Juliana Coelho',
			rating: 5,
			text: 'Foi ótimo, desde o atendente até o menino que aplica o produto, super educado e limpo, passava o produto e limpava ao mesmo tempo!!! Minha casa estava cheia de barata francesa, sumiram no mesmo dia!!',
			service: 'Dedetização de Baratas',
			location: 'Barra da Tijuca'
		},
		{
			name: 'Roberto Mendes',
			rating: 5,
			text: 'Excelente serviço de descupinização! Tinham cupins destruindo os móveis do meu apartamento há meses. A equipe foi super profissional e resolveu tudo. Já tem 1 ano e não voltou nenhum.',
			service: 'Descupinização',
			location: 'Leblon'
		},
		{
			name: 'Fernanda Oliveira',
			rating: 5,
			text: 'Contratei o fumacê pro meu condomínio e foi sensacional. Acabou com o problema de mosquitos que a gente tinha há anos. Todos os moradores elogiaram. Super recomendo!',
			service: 'Fumacê em Condomínio',
			location: 'Recreio dos Bandeirantes'
		},
		{
			name: 'Carlos Eduardo',
			rating: 5,
			text: 'Atendimento rápido, orçamento justo e resultado impecável. Meu restaurante estava com problema de ratos e resolveram em uma visita. Garantia de verdade, voltaram pra conferir depois.',
			service: 'Desratização',
			location: 'Centro'
		},
		{
			name: 'Patricia Santos',
			rating: 5,
			text: 'Melhor empresa de dedetização que já contratei! Pontualidade, profissionalismo e produto de qualidade. Minha casa ficou livre de escorpiões. Equipe muito atenciosa.',
			service: 'Controle de Escorpiões',
			location: 'Tijuca'
		},
		{
			name: 'Marcos Vinícius',
			rating: 5,
			text: 'Serviço impecável na sanitização do nosso escritório. A equipe chegou no horário, fez tudo organizado e o ambiente ficou com um cheiro ótimo. Clientes elogiaram a diferença!',
			service: 'Sanitização',
			location: 'Botafogo'
		}
	];

	let current = $state(0);

	function next() {
		current = (current + 1) % testimonials.length;
	}

	function prev() {
		current = (current - 1 + testimonials.length) % testimonials.length;
	}

	const visibleCards = $derived([
		testimonials[current],
		testimonials[(current + 1) % testimonials.length],
		testimonials[(current + 2) % testimonials.length]
	]);
</script>

<section class="py-24 md:py-32 bg-white relative overflow-hidden">
	<div class="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 lg:px-8 relative">
		<div class="text-center mb-16" use:fadeUp>
			<span class="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold mb-6">
				Depoimentos
			</span>
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				O que nossos <span class="text-primary">clientes</span> dizem
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Mais de 500 clientes satisfeitos em toda a região do Rio de Janeiro
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" use:staggerChildren={{ stagger: 0.1 }}>
			{#each visibleCards as testimonial, i (current + i)}
				<div class="{i >= 1 ? 'hidden md:block' : ''} {i === 2 ? 'hidden lg:block' : ''} bg-white rounded-2xl border border-zinc-200 p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg relative">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _, star}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill={star < testimonial.rating ? '#f59e0b' : '#e4e4e7'}
								class="transition-colors"
							>
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
							</svg>
						{/each}
					</div>

					<p class="text-muted-foreground text-sm leading-relaxed mb-6">
						"{testimonial.text}"
					</p>

					<div class="flex items-center gap-3 pt-4 border-t border-zinc-100">
						<div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold text-sm">
							{testimonial.name.split(' ').map(n => n[0]).join('')}
						</div>
						<div>
							<p class="font-semibold text-sm">{testimonial.name}</p>
							<p class="text-xs text-muted-foreground">{testimonial.location}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex items-center justify-center gap-4 mt-10">
			<button
				type="button"
				onclick={prev}
				aria-label="Depoimento anterior"
				class="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m15 18-6-6 6-6"/>
				</svg>
			</button>

			<div class="flex gap-2">
				{#each testimonials as _, i}
					<button
						type="button"
						onclick={() => current = i}
						aria-label="Ir para depoimento {i + 1}"
						class="w-2.5 h-2.5 rounded-full transition-all {i === current ? 'bg-primary w-8' : 'bg-zinc-300 hover:bg-zinc-400'}"
					></button>
				{/each}
			</div>

			<button
				type="button"
				onclick={next}
				aria-label="Próximo depoimento"
				class="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m9 18 6-6-6-6"/>
				</svg>
			</button>
		</div>
	</div>
</section>
