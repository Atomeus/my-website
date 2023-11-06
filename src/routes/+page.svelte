<script>
	import Header from '$lib/components/Header.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Header />

<Section header={'I have experience in:'}>
	<ul role="list" class="list-disc marker:text-yellow-200 text-lg px-12">
		<li>JavaScript</li>
		<li>PHP</li>
		<li>Python</li>
		<li>Go</li>
		<li>Docker</li>
		<li>SQL</li>
		<li>And much more...</li>
	</ul>
</Section>

<Section
	header={'Projects'}
	description={'Read more about the projects I have worked on and see the technologies behind them!'}
	comingSoon={true}
/>

<Section
	header={'Articles'}
	description={'See here for more articles on things that I find interesting'}
	comingSoon={true}
/>
