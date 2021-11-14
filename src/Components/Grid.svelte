<script>
    import Card from './Card.svelte';
    import { push } from 'svelte-spa-router'
    export let peliculas;
</script>

<div class="flex flex-wrap md:flex-row">
    {#each peliculas as item}
        <div class="m-6">
            <Card 
                title = {item.title}
                image = {item.poster_path}
                synopsis = {item.overview}
                popularity = {item.popularity}
                releasedate = {item.release_date}
                id = {item.id}
                on:ver-mas = {() => push('/Pelicula/' + item.id)}
            />
        </div>
    {/each}
</div>

