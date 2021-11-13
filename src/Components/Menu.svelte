<script>
    import { link } from 'svelte-spa-router'
</script>


<main>
    <nav class="flex flex-col w-full px-6 py-4 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
    <div class="mb-2 sm:mb-0">
        <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Peliculas y Series</a>
    </div>
    <div>
        <a href="/Pelicula" class="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark">Películas</a>
        <a href="/Serie" class="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark">Series</a>
    </div>
    </nav>
</main>