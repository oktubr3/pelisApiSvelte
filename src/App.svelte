<script>
  import Router from 'svelte-spa-router';
  import Menu from './Components/Menu.svelte';
  import routes from './routes';
</script>


<main>
	<Menu />
	<div class="container mx-auto">
		<Router {routes} />
	</div>
</main>

<style lang="postcss" global>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-4xl text-blue-100 m-4; 
  }
  h2 {
    @apply text-3xl text-blue-100 m-4;
  }
  h3 {
    @apply text-2xl text-blue-100; 
  }
  h4 {
    @apply text-xl text-blue-100 m-4;
  }
  h5 {
    @apply text-lg text-blue-100 m-4; 
  }
  h6 {
    @apply text-base text-blue-100 m-4;
  }
  p {
    @apply text-blue-100;
  }
  body { 
    @apply bg-gray-800;
  }
}
</style>