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

    // if (tvShows) {
    //     activeTvShow();
    // } else {
    //     activeMovies();
    // }

</script>


<main>
    <nav class="flex flex-col w-full px-6 py-4 font-sans text-center bg-black shadow sm:flex-row sm:text-left sm:justify-between">
    <div class="mb-2 sm:mb-0">
        <a href="/" class="text-2xl no-underline text-blue-400 hover:text-blue-200;"><Icon data={film} scale="2"/> Movies & TV Shows Guide</a>
    </div>
    <div class="flex">
        <h3>Movies</h3>
        <Switch bind:checked={tvShows}></Switch>
        <h3>TvShows</h3>
            {#if tvShows}
                {activeTvShow()}
            {:else}
                {activeMovies()}
            {/if}
    </div>
    </nav>
</main>