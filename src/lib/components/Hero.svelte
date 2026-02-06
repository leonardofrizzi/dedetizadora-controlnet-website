<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import WhatsAppCTA from '$lib/components/WhatsAppCTA.svelte';
	import heroImage from '$lib/assets/hero.webp';
</script>

<section class="relative min-h-screen flex items-center overflow-hidden">
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
		style="background-image: url({heroImage});"
	></div>

	<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

	<div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
	<div class="absolute bottom-1/4 right-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
		<div class="max-w-3xl">
			<div class="animate-fade-up" style="animation-delay: 0.1s;">
				<Badge class="mb-6 px-4 py-2 text-sm bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
					<span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
					Atendimento 24 horas
				</Badge>
			</div>

			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white animate-fade-up" style="animation-delay: 0.2s;">
				Proteção total contra
				<span class="block mt-2 bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent pb-2">
					pragas urbanas
				</span>
			</h1>

			<p class="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed animate-fade-up max-w-2xl" style="animation-delay: 0.3s;">
				Serviços profissionais de dedetização, desratização e descupinização.
				<span class="text-white font-medium">Ambiente seguro</span> para sua família e seu negócio.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 animate-fade-up" style="animation-delay: 0.4s;">
				<WhatsAppCTA text="Fazer Orçamento Grátis" />
				<Button
					size="lg"
					variant="outline"
					class="text-lg px-8 py-6 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
					href="#servicos"
				>
					Conhecer Serviços
				</Button>
			</div>

			<div class="flex flex-wrap gap-6 mt-12 animate-fade-up" style="animation-delay: 0.5s;">
				<div class="flex items-center gap-2 text-white/60">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
						<path d="m9 12 2 2 4-4"/>
					</svg>
					<span class="text-sm">Garantia de 90 dias</span>
				</div>
				<div class="flex items-center gap-2 text-white/60">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
						<rect width="18" height="18" x="3" y="3" rx="2"/>
						<path d="M7 7h10"/>
						<path d="M7 12h10"/>
						<path d="M7 17h10"/>
					</svg>
					<span class="text-sm">Certificado INEA</span>
				</div>
				<div class="flex items-center gap-2 text-white/60">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
						<circle cx="9" cy="7" r="4"/>
						<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
					</svg>
					<span class="text-sm">Profissionais qualificados</span>
				</div>
			</div>
		</div>
	</div>

</section>
