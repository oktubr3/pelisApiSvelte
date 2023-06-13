<script>
    import { link, push } from 'svelte-spa-router';
    import Icon from 'svelte-awesome';
    import { film } from 'svelte-awesome/icons';
    import Switch from './Switch.svelte';

    let tvShows = false;

    const activeMovies = () => {
        push('/');
    }
    const activeTvShow = () => {
        push('/TvShows');
    }
</script>


<main>
    <nav class="flex flex-col w-full px-6 py-4 font-sans text-center bg-black shadow sm:flex-row sm:text-left sm:justify-between">
    <div class="flex flex-row mb-2 sm:mb-0">
        <a href="/" class="font-semubold text-3xl pt-1 no-underline text-red-500 hover:text-red-300"><Icon class="pt-1 pb-2" data={film} scale="2.5"/> Movies & TV Shows</a>
    </div>
    <div class="flex">
        <div class="flex">
        <h3>Movies</h3>
        <Switch bind:checked={tvShows} />
        <h3>TvShows</h3>
            <span style="font-size: 0;">
                {#if tvShows}
                    {activeTvShow()}
                {:else}
                    {activeMovies()}
                {/if}
            </span>
    </div>
    </nav>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

    a { 
        font-family: 'Montserrat', sans-serif;
    }
</style>