<script lang="ts">
	const diferenciais = [
		{ icon: 'clock', text: 'Atendimento 24h' },
		{ icon: 'shield', text: 'Garantia 90 dias' },
		{ icon: 'certificate', text: 'Certificado INEA' },
		{ icon: 'check', text: 'Produtos ANVISA' },
		{ icon: 'zap', text: 'Orçamento Rápido' },
		{ icon: 'users', text: 'Equipe Qualificada' }
	];
</script>

<section class="py-5 bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_100%] animate-gradient overflow-hidden relative">
	<div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
	<div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-500 to-transparent z-10 pointer-events-none"></div>

	<div class="marquee-container">
		<div class="marquee-content">
			{#each diferenciais as item}
				<div class="flex items-center gap-3 text-white mx-8">
					<div class="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
						{#if item.icon === 'clock'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"/>
								<polyline points="12 6 12 12 16 14"/>
							</svg>
						{:else if item.icon === 'shield'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
						{:else if item.icon === 'certificate'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect width="18" height="18" x="3" y="3" rx="2"/>
								<path d="M7 7h10"/>
								<path d="M7 12h10"/>
								<path d="M7 17h10"/>
							</svg>
						{:else if item.icon === 'check'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
								<polyline points="22 4 12 14.01 9 11.01"/>
							</svg>
						{:else if item.icon === 'zap'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
							</svg>
						{:else if item.icon === 'users'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{/if}
					</div>
					<span class="font-semibold whitespace-nowrap text-base">{item.text}</span>
				</div>
			{/each}
			{#each diferenciais as item}
				<div class="flex items-center gap-3 text-white mx-8">
					<div class="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
						{#if item.icon === 'clock'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"/>
								<polyline points="12 6 12 12 16 14"/>
							</svg>
						{:else if item.icon === 'shield'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
						{:else if item.icon === 'certificate'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect width="18" height="18" x="3" y="3" rx="2"/>
								<path d="M7 7h10"/>
								<path d="M7 12h10"/>
								<path d="M7 17h10"/>
							</svg>
						{:else if item.icon === 'check'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
								<polyline points="22 4 12 14.01 9 11.01"/>
							</svg>
						{:else if item.icon === 'zap'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
							</svg>
						{:else if item.icon === 'users'}
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{/if}
					</div>
					<span class="font-semibold whitespace-nowrap text-base">{item.text}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes gradient {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	.animate-gradient {
		animation: gradient 8s ease infinite;
	}

	.marquee-container {
		display: flex;
		overflow: hidden;
		width: 100%;
	}

	.marquee-content {
		display: flex;
		animation: marquee 25s linear infinite;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.marquee-container:hover .marquee-content {
		animation-play-state: paused;
	}
</style>
