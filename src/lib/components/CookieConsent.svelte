<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

	let show = $state(false);

	onMount(() => {
		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			setTimeout(() => {
				show = true;
			}, 1500);
		}
	});

	function accept() {
		localStorage.setItem('cookie-consent', 'accepted');
		show = false;
	}

	function decline() {
		localStorage.setItem('cookie-consent', 'declined');
		show = false;
	}
</script>

{#if show}
	<div class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
		<div class="container mx-auto max-w-4xl">
			<div class="bg-white rounded-2xl shadow-2xl border border-zinc-200 p-6 md:p-8">
				<div class="flex flex-col md:flex-row md:items-center gap-6">
					<!-- Icon -->
					<div class="hidden md:flex w-14 h-14 rounded-xl bg-primary/10 items-center justify-center shrink-0">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
							<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
							<path d="M8.5 8.5v.01"/>
							<path d="M16 15.5v.01"/>
							<path d="M12 12v.01"/>
							<path d="M11 17v.01"/>
							<path d="M7 14v.01"/>
						</svg>
					</div>

					<!-- Content -->
					<div class="flex-1">
						<h3 class="font-semibold text-zinc-900 mb-2">Este site utiliza cookies</h3>
						<p class="text-sm text-muted-foreground leading-relaxed">
							Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa
							<a href="/privacidade" class="text-primary hover:underline">Política de Privacidade</a>.
						</p>
					</div>

					<!-- Buttons -->
					<div class="flex flex-col sm:flex-row gap-3 shrink-0">
						<Button
							variant="outline"
							class="text-sm"
							onclick={decline}
						>
							Recusar
						</Button>
						<Button
							class="text-sm bg-primary hover:bg-primary/90"
							onclick={accept}
						>
							Aceitar cookies
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(100%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-slide-up {
		animation: slide-up 0.4s ease-out forwards;
	}
</style>
