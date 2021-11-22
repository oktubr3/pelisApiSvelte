<script>
  import Router from 'svelte-spa-router';
  import Menu from './Components/Menu.svelte';
  import routes from './routes';
</script>


<main class="">
	<Menu />
	<div class="container mx-auto flex flex-row flex-wrap justify-center items-center content-center">
		<Router {routes} />
	</div>
</main>

<style lang="postcss" global>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-4xl text-blue-100; 
  }
  h2 {
    @apply text-3xl text-blue-100;
  }
  h3 {
    @apply text-2xl text-blue-100; 
  }
  h4 {
    @apply text-xl text-blue-100;
  }
  h5 {
    @apply text-lg text-blue-100; 
  }
  h6 {
    @apply text-base text-blue-100;
  }
  p {
    @apply text-blue-100;
  }
  body { 
    background-color: #181818;
  }
}
</style>