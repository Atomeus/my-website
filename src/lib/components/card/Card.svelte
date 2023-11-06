<script>
	/** @type {string}*/
	export let heading;
</script>

<section class="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 py-12">
	<h2 class="sm:text-7xl">{heading}</h2>
	<slot />
</section>
