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


{#await promise}
    <div align="center"><Loader /></div>
{:then series}
    <h1 class="text-center mt-6 mb-3 ml-5 text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-white md:text-3xl">Popular TV Shows</h1>
    <GridTvShows {series} />
{:catch error}
    <p>{error}</p>
{/await}