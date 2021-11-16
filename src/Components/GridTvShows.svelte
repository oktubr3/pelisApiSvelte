<script>
    import Card from './Card.svelte';
    import { push } from 'svelte-spa-router'
    export let series;
</script>

<div class="flex flex-wrap md:flex-row">
    {#each series as item}
        <div class="flex-auto m-4">
            <Card 
                name = {item.name}
                image = {item.poster_path}
                synopsis = {item.overview}
                popularity = {item.popularity}
                releasedate = {item.first_air_date}
                id = {item.id}
                on:ver-mas = {() => push('/Serie/' + item.id)}
            />
        </div>
    {/each}
</div>

