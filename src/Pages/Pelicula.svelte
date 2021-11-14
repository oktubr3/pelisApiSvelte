<script>
    import { onMount } from 'svelte'
    export let params = {};
    let id = params.id;
    const url = 'https://api.themoviedb.org/3/movie/';
    const key = '?api_key=ad9a11d6e2c0d1628ab6cb4adbfeb14d&language=en-US';
    const urlFinal = url + id + key;

    let peli = {};
    let generos = [];
    onMount(async () => {
        const res = await fetch(urlFinal);
        peli = res.json();
        generos = await peli.genres;
        console.log(pelicula);
        console.log(generos);
    });
</script>