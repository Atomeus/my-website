<script>
	/**@type {string}*/
	export let header;
	/**@type {string?}*/
	export let description = null;

	/**@type {boolean}*/
	export let comingSoon = false;
</script>

<section class="my-6 md:my-16">
	<h3 class="text-2xl md:text-4xl mb-3">{header}</h3>
	{#if comingSoon}
		<p class="text-lg">Coming soon...</p>
	{:else}
		{#if description}
			<p class="text-lg">{description}</p>
		{/if}

		<slot />
	{/if}
</section>
