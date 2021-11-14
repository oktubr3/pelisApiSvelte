<script>
    import { onMount } from 'svelte'
    export let params = {};
    let id = params.id;
    const url = 'https://api.themoviedb.org/3/movie/';
    const key = '?api_key=ad9a11d6e2c0d1628ab6cb4adbfeb14d&language=en-US';
    const urlFinal = url + id + key;

    let pelis = {};
    let generos = [];
  
    onMount(async () => {
        try {
            const res = await fetch(urlFinal);
            pelis = await res.json();
            console.log(pelis);
            generos = pelis.genres;
            console.log(generos);
        } catch (e) {
            console.log(e);
        }
    });
</script>

<div class="mt-6 flex flex-row">
    <div class="flex-column">
        <img src="http://image.tmdb.org/t/p/w500{pelis.poster_path}" alt="pelis.title">
    </div>
    <div class="flex-column">
        <h1>{pelis.title}</h1>
        <h3 class="italic">{pelis.tagline}</h3>
            <div class="flex flex-row">
                {#each generos as genero}
                    <h6 class="flex-row">{genero.name}</h6>
                {/each}
                {#if pelis.original_language === 'en'}
                    <h6> English </h6>
                {:else}
                    <h6> No es Inglés </h6>
                {/if}
            </div>
        <p>{pelis.overview}</p>
    </div>
</div>