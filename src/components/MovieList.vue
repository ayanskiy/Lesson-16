<template>
    <div class="row">
        <div class="col-md-4 mb-4" v-for="movie in movies" :key="movie.id" @click="goToDetails(movie.id)">
            <MovieDetails :movie="movie" />
        </div>
    </div>
</template>
  
<script>
import MovieDetails from './MovieDetails.vue';
  
export default {
    components: { MovieDetails },
    props: ['movies'],
    methods: {
        goToDetails(id) {
            this.$router.push(`/movies/${id}`);
        }
    }
};
</script>