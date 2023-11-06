<script>

    /**@type {number}*/
    export let x
    /**@type {number}*/
    export let y

    const diff = 384 / 2 
</script>

<div class="absolute h-96 w-96 rounded-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 pointer-events-none border overflow-hidden" 
    style="transform: translate({x - diff}px, {y - diff}px)"></div>