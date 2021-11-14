<script>
    import { link } from 'svelte-spa-router'
</script>


<main>
    <nav class="flex flex-col w-full px-6 py-4 font-sans text-center bg-black shadow sm:flex-row sm:text-left sm:justify-between">
    <div class="mb-2 sm:mb-0">
        <a href="/" class="text-3xl no-underline text-blue-100 hover:text-blue-100;">Peliculas y Series</a>
    </div>
    <div>
        <a href="/Pelicula" class="ml-2 text-lg no-underline text-blue-100 hover:text-blue-dark">Películas</a>
        <a href="/Serie" class="ml-2 text-lg no-underline text-blue-100 hover:text-blue-dark">Series</a>
    </div>
    </nav>
</main>