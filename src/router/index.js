import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import MoviesPage from '../views/Movies.vue';
import MovieDetails from '../views/MovieDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/movies', name: 'Movies', component: MoviesPage },
  { path: '/movies/:id', name: 'MovieDetails', component: MovieDetails },
  { path: '/movies/search/:query', name: 'SearchResults', component: MoviesPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;