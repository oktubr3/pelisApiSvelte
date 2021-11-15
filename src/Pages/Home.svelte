<script>
    import Loader from '../Components/Loader.svelte'
    import Grid from '../Components/Grid.svelte'
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=ad9a11d6e2c0d1628ab6cb4adbfeb14d&language=en-US&page=1"

    let promise = ajax();
    let peliculas = [];

    async function ajax(){
        const res = await fetch(url);
        peliculas = await res.json();
        console.log(peliculas.results);
        if (res.ok) {
        return peliculas.results;
    } else {
        throw new Error ('No hay conexión con la API');
    }
}
</script>

<h1>Peliculas Mas Populares</h1><br>
{#await promise}
    <div align="center"><Loader /></div>
{:then peliculas}
    <Grid {peliculas} />
{:catch error}
    <p>{error}</p>
{/await}