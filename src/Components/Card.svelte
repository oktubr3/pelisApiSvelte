<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let title;
  export let image;
  export let synopsis;
  export let popularity;
  export let releasedate;
  export let id;
  export let name;
  export let first_air_date;

  const ver = () => dispatch("ver-mas");

  // Truncar el texto del parrafo de Synopsys
  const truncate = (input) => {
    if (input.length > 140) {
      return input.substring(0, 140) + "...";
    } else {
      return input;
    }
  };
</script>

<!-- Soon review at https://moviedate.netlify.app/ -->

<div on:click={ver}>
  <div
    class="flex w-full max-w-sm mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-md"
  >
    <div class="w-2 bg-gray-800" />

    <div
      class="relative overflow-hidden text-white transition duration-500 ease-in-out transform shadow-lg rounded-xl hover:-translate-y-2 hover:shadow-2xl movie-item movie-card"
      data-movie-id={id}
    >
      <div
        class="mt-52 absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900"
      />
      <div
        class="relative z-10 px-10 pt-10 space-y-6 cursor-pointer group movie_info"
      >
        <div class="w-full poster__info align-self-end">
          <div class="h-32" />
          <div class="space-y-6 detail_info">
            <div class="flex flex-col space-y-2 inner">
              <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">
                {#if title === undefined}
                  {name}
                {:else}
                  {title}
                {/if}
              </h3>
            </div>
            <div class="flex flex-row justify-between datos">
              <div class="flex flex-col datos_col">
                <div class="text-sm text-gray-400">Popularity:</div>
                <div class="popularity">{popularity}</div>
              </div>
              {#if releasedate === undefined}
                <div class="flex flex-col datos_col">
                  <div class="text-sm text-gray-400">First Air Date:</div>
                  <div class="release">{first_air_date}</div>
                </div>
              {:else}
                <div class="flex flex-col datos_col">
                  <div class="text-sm text-gray-400">Release date:</div>
                  <div class="release">{releasedate}</div>
                </div>
              {/if}
            </div>
            <div class="flex flex-col overview">
              <div class="flex flex-col" />
              <div class="mb-2 text-xs text-gray-400">Overview:</div>
                {#if synopsis === "" || synopsis === undefined}
                  <h3 class=" text-2xl mb-6 italic text-opacity-25" style="text-shadow:none;">Synopsys is not available at this time.</h3>
                {:else}
                  <p class="mb-6 text-xs text-gray-100">{truncate(synopsis)}</p>
                {/if}
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute inset-0 w-full transform -translate-y-4"
        src="http://image.tmdb.org/t/p/w500{image}"
        alt={title}
        style="filter: grayscale(0); "
      />
      <div class="relative z-10 flex flex-row pb-10 space-x-4 poster__footer">
        <button
          class="flex items-center mx-auto py-2 transition bg-red-500 border-0 rounded-md -white ftemont-medium itext-sm px-4 focus:outline-none focus:ring hover:bg-red-600 active:bg-red-700 focus:ring-red-300"
          type="submit"
          on:click={ver}>Mas Info...</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  h3 {
    height: 50px;
    text-shadow: black 0.1em 0.1em 0.2em;
  }
</style>
