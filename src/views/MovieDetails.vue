<template>
    <div>
        <AppHeader />
        <div class="container mt-4" v-if="movie">
            <div class="row">
            <div class="col">
                <div class="card">
                <img :src="movie.poster?.url || 'https://via.placeholder.com/300x450?text=No+Image+Available'" class="card-img-top" alt="Poster">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.name }}</h5>
                    <p class="card-text">Год: {{ movie.year }}</p>
                    <p class="card-text">Рейтинг: {{ movie.rating.kp }}</p>
                    <p class="card-text" v-if="movie.genres.length">Жанры: {{ movie.genres.map(genre => genre.name).join(', ') }}</p>
                    <h3>Актеры:</h3>
                    <ul class="list-group">
                        <li v-for="actor in movie.persons.slice(0, 3)" :key="actor.id" class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>{{ actor.name }}</h5>
                            </div>
                            <img :src="actor.photo || 'https://via.placeholder.com/100x150?text=No+Image+Available'" alt="Actor" class="img-thumbnail">
                        </li>
                    </ul>
                    <h3>Похожие фильмы:</h3>
                    <MovieList :movies="movie.similars" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue';
import MovieList from '@/components/MovieList.vue';
import axios from 'axios';
  
export default {
    components: { AppHeader, MovieList },
    data() {
        return {
            movie: null
        };
    },
    async created() {
        const id = this.$route.params.id;
        try {
            const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
            headers: {
                'X-API-KEY': '7HGB3NH-5YCMWDR-MB99QYW-068XPS7'
            }
            });
            this.movie = response.data;
        } 
        catch (error) {
            console.error('Error fetching movie details:', error);
        }
    }
};
</script>