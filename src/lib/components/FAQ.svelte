<script lang="ts">
	import { fadeUp, staggerChildren } from '$lib/utils/animations';

	const faqs = [
		{
			question: 'Quais regiões do Rio de Janeiro vocês atendem?',
			answer: 'Atendemos toda a região metropolitana do Rio de Janeiro, incluindo Barra da Tijuca, Recreio dos Bandeirantes, Leblon, Tijuca, Botafogo, Centro, Vargem Grande, São Cristóvão e adjacências. Entre em contato para confirmar atendimento na sua região.'
		},
		{
			question: 'Os produtos utilizados são seguros para crianças e pets?',
			answer: 'Sim! Utilizamos apenas produtos aprovados pela ANVISA e aplicamos seguindo rigorosos protocolos de segurança. Nossos técnicos são treinados para garantir a proteção de toda a família, incluindo crianças e animais de estimação.'
		},
		{
			question: 'Qual a garantia dos serviços?',
			answer: 'Oferecemos garantia de 90 dias em todos os nossos serviços. Caso haja reincidência do problema dentro desse período, realizamos uma nova aplicação sem custo adicional.'
		},
		{
			question: 'Como funciona o orçamento?',
			answer: 'O orçamento é gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou telefone, informar o tipo de praga e as características do local. Respondemos rapidamente com o valor e as condições do serviço.'
		},
		{
			question: 'Vocês atendem emergências?',
			answer: 'Sim! Oferecemos atendimento 24 horas para casos de emergência. Infestações graves de escorpiões, ratos ou outras pragas que ofereçam risco à saúde são tratadas com prioridade.'
		},
		{
			question: 'A empresa possui certificação?',
			answer: 'Sim, somos empresa certificada pelo INEA (Instituto Estadual do Ambiente) com Código Nº UN 007891/55.61.10 e CAT Nº IN004302. Todos os nossos serviços seguem as normas e regulamentações vigentes.'
		},
		{
			question: 'Quanto tempo leva para o serviço fazer efeito?',
			answer: 'O efeito começa imediatamente após a aplicação. Para dedetização, os resultados são visíveis em 24 a 48 horas. Para desratização e descupinização, o processo pode levar de 7 a 15 dias para eliminação completa.'
		},
		{
			question: 'Preciso sair de casa durante a aplicação?',
			answer: 'Recomendamos que pessoas e animais de estimação se ausentem do ambiente durante a aplicação e por cerca de 2 horas após o término. Nossos técnicos orientarão sobre os cuidados específicos para cada tipo de serviço.'
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" class="py-24 md:py-32 bg-zinc-100">
	<div class="container mx-auto px-4 lg:px-8">
		<div class="text-center mb-16" use:fadeUp>
			<span class="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold mb-6">
				FAQ
			</span>
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Perguntas <span class="text-primary">frequentes</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Tire suas dúvidas sobre nossos serviços de controle de pragas
			</p>
		</div>

		<div class="max-w-3xl mx-auto space-y-4" use:staggerChildren={{ stagger: 0.08 }}>
			{#each faqs as faq, i}
				<div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden transition-all duration-300 {openIndex === i ? 'shadow-lg border-primary/30' : ''}">
					<button
						type="button"
						onclick={() => toggle(i)}
						class="w-full flex items-center justify-between p-6 text-left"
					>
						<span class="font-semibold text-zinc-900 pr-4">{faq.question}</span>
						<div class="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 transition-all {openIndex === i ? 'bg-primary text-white rotate-180' : 'text-zinc-600'}">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="m6 9 6 6 6-6"/>
							</svg>
						</div>
					</button>

					{#if openIndex === i}
						<div class="px-6 pb-6 -mt-2">
							<p class="text-muted-foreground leading-relaxed">{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
