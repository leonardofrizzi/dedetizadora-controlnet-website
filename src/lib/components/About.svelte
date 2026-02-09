<script lang="ts">
	import WhatsAppCTA from '$lib/components/WhatsAppCTA.svelte';
	import { slideLeft, slideRight, scaleUp } from '$lib/utils/animations';
	import aboutImage from '$lib/assets/sn.jpg';
</script>

<section id="sobre" class="py-24 md:py-32 bg-white relative overflow-hidden">
	<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
	<div class="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
	<div class="absolute bottom-20 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 lg:px-8 relative">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<div use:slideLeft>
				<span class="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold mb-6">
					Sobre Nós
				</span>
				<h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-zinc-900">
					Sua confiança é nossa
					<span class="text-gradient">maior conquista</span>
				</h2>
				<p class="text-lg text-zinc-600 mb-6 leading-relaxed">
					A Control Net é especializada em controle de pragas urbanas, oferecendo soluções
					eficientes e seguras para residências, comércios e indústrias no Rio de Janeiro.
				</p>
				<p class="text-lg text-zinc-600 mb-8 leading-relaxed">
					Com profissionais qualificados e produtos aprovados pela ANVISA, garantimos a eliminação completa
					das pragas com <span class="text-zinc-900 font-semibold">total segurança para sua família</span>.
				</p>

				<WhatsAppCTA
					text="Fale Conosco"
					message="Olá! Gostaria de saber mais sobre a Control Net."
				/>
			</div>

			<div class="relative" use:slideRight>
				<div class="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-900/20">
					<img src={aboutImage} alt="Equipe Control Net Dedetizadora" class="w-full h-full object-cover" />
				</div>

				<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-3 rounded-full shadow-xl shadow-primary/30 flex items-center gap-2 whitespace-nowrap">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
						<path d="m9 12 2 2 4-4"/>
					</svg>
					<span class="font-semibold">Empresa Certificada INEA</span>
				</div>
			</div>
		</div>
	</div>
</section>
