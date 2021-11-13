import Home from './Pages/Home.svelte';
import Pelicula from './Pages/Pelicula.svelte';
import Serie from './Pages/Serie.svelte';
import Error404 from './Pages/Error404.svelte';

const routes = {
    '/':Home,
    '/Pelicula/:id':Pelicula,
    '/Serie/:id':Serie,
    '*':Error404
}

export default routes;