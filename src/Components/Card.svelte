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
              <!-- <a href="#" class="relative flex items-center flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full w-min group-hover:bg-red-700" data-unsp-sanitized="clean">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="absolute text-xl font-bold text-white transition duration-500 ease-in-out transform opacity-0 group-hover:opacity-100 group-hover:translate-x-16 group-hover:pr-2">Trailer</div>
                    </a> -->
              <h3
                class="text-2xl font-bold text-white"
                data-unsp-sanitized="clean"
              >
                {#if title === undefined}
                {name}
                {:else}
                {title}
                {/if}
              </h3>
              <!-- <div class="mb-0 text-lg text-gray-400">{tagline}</div> -->
            </div>
            <div class="flex flex-row justify-between datos">
              <div class="flex flex-col datos_col">
                <div class="popularity">{popularity}</div>
                <div class="text-sm text-gray-400">Popularity:</div>
              </div>
              {#if releasedate === undefined}
              <div class="flex flex-col datos_col">
                <div class="release">{first_air_date}</div>
                <div class="text-sm text-gray-400">First Air Date:</div>
              </div>
              {:else}
              <div class="flex flex-col datos_col">
                <div class="release">{releasedate}</div>
                <div class="text-sm text-gray-400">Release date:</div>
              </div>
              {/if}
              <!-- <div class="flex flex-col datos_col">
                        <div class="release">{runtime}</div>
                        <div class="text-sm text-gray-400">Runtime:</div>
                    </div> -->
            </div>
            <div class="flex flex-col overview">
              <div class="flex flex-col" />
              <div class="mb-2 text-xs text-gray-400">Overview:</div>
              <p class="mb-6 text-xs text-gray-100;">
                {truncate(synopsis)}
              </p>
            </div>
          </div>

          <!-- <div data-countdown="2021-09-15" class="absolute inset-x-0 top-0 w-full pt-5 mx-auto text-2xl font-bold text-center text-white uppercase drop-shadow-sm">00 Days 00:00:00</div> -->
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
