<script>
  import Router from 'svelte-spa-router'
  import Menu from './Components/Menu.svelte'
  import routes from './routes'
</script>


<main>
	<Menu />
	<div class="container px-4 mx-auto my-6">
		<Router {routes} />
	</div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>