<script>
    import Loader from '../Components/Loader.svelte'
    import GridTvShows from '../Components/GridTvShows.svelte'
    const url = "https://api.themoviedb.org/3/tv/popular?api_key=ad9a11d6e2c0d1628ab6cb4adbfeb14d&language=en-US&page=1"

    let promise = ajax();
    let series = [];

    async function ajax(){
        const res = await fetch(url);
        series = await res.json();
        console.log(series.results);
        if (res.ok) {
        return series.results;
    } else {
        throw new Error ('No hay conexión con la API');
    }
}
</script>

<h2>Popular Tv Shows</h2><br>
{#await promise}
    <div align="center"><Loader /></div>
{:then series}
    <GridTvShows {series} />
{:catch error}
    <p>{error}</p>
{/await}