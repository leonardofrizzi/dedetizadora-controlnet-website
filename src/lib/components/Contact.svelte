<script lang="ts">
	import contactImage from '$lib/assets/contact.webp';
	import { slideLeft, slideRight, scaleUp } from '$lib/utils/animations';

	const phone = '5521970379339';
	const message = 'Olá! Gostaria de solicitar um orçamento.';

	const contacts = [
		{
			title: 'WhatsApp',
			description: 'Atendimento rápido e direto. Tire suas dúvidas ou solicite um orçamento.',
			info: '(21) 97037-9339',
			icon: 'whatsapp',
			href: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
			external: true
		},
		{
			title: 'Instagram',
			description: 'Siga nosso perfil e acompanhe nosso trabalho nas redes sociais.',
			info: '@controlnetdedetizacao',
			icon: 'instagram',
			href: 'https://instagram.com/controlnetdedetizacao',
			external: true
		},
		{
			title: 'E-mail',
			description: 'Envie sua mensagem detalhada e responderemos em até 24 horas.',
			info: 'contato@controlnet.com.br',
			icon: 'email',
			href: 'mailto:contato@controlnetdedetizacao.com.br',
			external: false
		}
	];
</script>

<section id="contato" class="py-24 md:py-32 bg-zinc-50">
	<div class="container mx-auto px-4 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<div use:slideLeft>
				<span class="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold mb-6">
					Contato
				</span>
				<h2 class="text-4xl md:text-5xl font-bold mb-6">
					Fale <span class="text-primary">conosco</span>
				</h2>
				<p class="text-lg text-muted-foreground mb-10 max-w-lg">
					Atendimento 24 horas para emergências. Entre em contato pelo canal de sua preferência e receba um orçamento rápido e sem compromisso.
				</p>

				<div class="space-y-4">
					{#each contacts as contact}
						<a
							href={contact.href}
							target={contact.external ? '_blank' : undefined}
							rel={contact.external ? 'noopener noreferrer' : undefined}
							class="group flex items-start gap-5 bg-white rounded-2xl border border-zinc-200 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
						>
							<div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
								{#if contact.icon === 'whatsapp'}
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
									</svg>
								{:else if contact.icon === 'instagram'}
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#E4405F">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
									</svg>
								{:else if contact.icon === 'email'}
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
										<rect width="20" height="16" x="2" y="4" rx="2"/>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
									</svg>
								{/if}
							</div>

							<div class="flex-1 min-w-0">
								<h3 class="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
									{contact.title}
								</h3>
								<p class="text-muted-foreground text-sm leading-relaxed mb-2">
									{contact.description}
								</p>
								<span class="text-primary font-medium text-sm">
									{contact.info}
								</span>
							</div>

							<div class="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M5 12h14"/>
									<path d="m12 5 7 7-7 7"/>
								</svg>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<div class="relative" use:slideRight>
				<div class="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200">
					<img
						src={contactImage}
						alt="Entre em contato com a ControlNet"
						class="w-full h-full object-cover"
					/>
				</div>

				<div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-zinc-100">
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
								<circle cx="12" cy="12" r="10"/>
								<polyline points="12 6 12 12 16 14"/>
							</svg>
						</div>
						<div>
							<p class="font-bold text-zinc-900">Atendimento 24h</p>
							<p class="text-sm text-muted-foreground">Emergências a qualquer hora</p>
						</div>
					</div>
				</div>

				<div class="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
				<div class="absolute -bottom-8 right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
			</div>
		</div>
	</div>
</section>
