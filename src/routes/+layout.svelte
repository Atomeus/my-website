<script>
	import '../app.css';

	const coord = { x: 0, y: 0 };

	// /**@param {MouseEvent} event*/
	// function handleMouse(event) {
	// 	const clientWidth = document.body.clientWidth;
	// 	const clientHeight = document.body.clientHeight;
	// 	const x = (event.clientX / clientWidth) * 200;
	// 	const y = (event.clientY / clientHeight) * 200;

	// 	coord.x = x;
	// 	coord.y = y;
	// }
</script>

<main class="h-screen px-12 relative overflow-hidden text-white">
	<slot />
</main>
