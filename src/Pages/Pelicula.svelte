<script>
    import { onMount } from 'svelte'
    export let params = {};
    let id = params.id;
    const url = 'https://api.themoviedb.org/3/movie/';
    const key = '?api_key=ad9a11d6e2c0d1628ab6cb4adbfeb14d&language=en-US';
    const urlFinal = url + id + key;

    let pelis = {};
    let generos = [];
    const obtenerPeli = () => {}
    onMount(obtenerPeli = async () => {
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