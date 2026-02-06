<script lang="ts">
	import logo from '$lib/assets/d.svg';

	const services = [
		'Dedetização',
		'Desratização',
		'Descupinização',
		'Controle de Aranhas',
		'Controle de Escorpiões',
		'Sanitização'
	];

	const links = [
		{ label: 'Serviços', href: '/#servicos' },
		{ label: 'Sobre Nós', href: '/#sobre' },
		{ label: 'Contato', href: '/#contato' }
	];
</script>

<footer class="relative bg-zinc-950 text-white overflow-hidden">
	<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
	<div class="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 lg:px-8 relative">
		<div class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
			<div class="lg:col-span-1">
				<div class="flex items-center gap-3 mb-6">
					<img src={logo} alt="Control Net" class="h-12 w-12 rounded-xl" />
					<div>
						<span class="font-bold text-xl">Control Net</span>
						<span class="block text-xs text-white/50">Dedetização</span>
					</div>
				</div>
				<p class="text-white/60 mb-4 leading-relaxed text-sm">
					Mantenha bem protegido seu patrimônio contra as pragas. Profissionais super qualificados.
				</p>
				<div class="text-white/40 text-xs space-y-1 mb-6">
					<p>CNPJ: 05.800.819/0001-57</p>
					<p>INEA: UN 007891/55.61.10</p>
					<p>CAT Nº IN004302</p>
				</div>
				<div class="flex gap-3">
					<a href="https://facebook.com/controlnetdedetizacao" target="_blank" aria-label="Facebook" class="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/70">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
					<a href="https://instagram.com/controlnetdedetizacao" target="_blank" aria-label="Instagram" class="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/70">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
						</svg>
					</a>
					<a href="https://wa.me/5521970379339" target="_blank" aria-label="WhatsApp" class="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white/70">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
						</svg>
					</a>
				</div>
			</div>

			<div>
				<h4 class="font-semibold mb-6 text-white">Serviços</h4>
				<nav class="flex flex-col gap-3">
					{#each services as service}
						<a href="/#servicos" class="text-white/60 hover:text-primary transition-colors text-sm">
							{service}
						</a>
					{/each}
				</nav>
			</div>

			<div>
				<h4 class="font-semibold mb-6 text-white">Links Rápidos</h4>
				<nav class="flex flex-col gap-3">
					{#each links as link}
						<a href={link.href} class="text-white/60 hover:text-primary transition-colors text-sm">
							{link.label}
						</a>
					{/each}
				</nav>
				<div class="mt-6 pt-6 border-t border-white/10">
					<h5 class="font-medium text-white/80 text-sm mb-3">Combatemos</h5>
					<p class="text-white/50 text-xs leading-relaxed">
						Baratas, Ratos, Traças, Mariposas, Formigas, Cupim, Mosquitos, Lacraias e muito mais.
					</p>
				</div>
			</div>

			<div>
				<h4 class="font-semibold mb-6 text-white">Contato</h4>
				<div class="space-y-4">
					<a href="https://wa.me/5521970379339" target="_blank" class="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
						<div class="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-[#25D366]">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
							</svg>
						</div>
						<span class="text-sm font-medium">(21) 97037-9339</span>
					</a>
					<div class="flex items-center gap-3 text-white/60">
						<div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
								<circle cx="12" cy="10" r="3"/>
							</svg>
						</div>
						<span class="text-sm">Rio de Janeiro e região</span>
					</div>
					<div class="flex items-center gap-3 text-white/60">
						<div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"/>
								<polyline points="12 6 12 12 16 14"/>
							</svg>
						</div>
						<span class="text-sm">Atendimento 24 horas</span>
					</div>
				</div>
			</div>
		</div>

		<div class="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-white/40 text-sm">
				&copy; {new Date().getFullYear()} Control Net Dedetização. Todos os direitos reservados.
			</p>
			<p class="text-white/30 text-xs">
				Garantia a partir de 90 dias | Certificado de garantia
			</p>
		</div>
	</div>
</footer>
