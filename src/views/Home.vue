<template>
    <div>
        <AppHeader />
        <div class="container mt-4">
            <SearchForm @search="searchMovies" />
            <div class="row mb-3 mt-3">
                <div class="d-grid gap-2">
                    <button @click="filterByRating" class="btn btn-primary btn-sm mr-3">Фильмы с рейтингом > 9</button>
                    <button @click="filterByYear" class="btn btn-secondary btn-sm">Фильмы после 2000 года</button>
                </div>
            </div>
            <div class="row justify-content-center">
                <MovieList :movies="movies" />
            </div>
            <div v-if="!movies.length" class="alert alert-warning mt-3">Ничего не найдено</div>
        </div>
    </div>
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue';
import SearchForm from '@/components/SearchForm.vue';
import MovieList from '@/components/MovieList.vue';
import axios from 'axios';
  
export default {
    name: 'HomePage',
    components: { AppHeader, SearchForm, MovieList },
    data() {
        return {
            movies: []
        };
    },
    created() {
        this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            try {
                const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie', {
                    headers: {
                        'X-API-KEY': '7HGB3NH-5YCMWDR-MB99QYW-068XPS7'
                    },
                    params: {
                        limit: 20,
                        sortField: 'rating.kp',
                        sortType: -1
                    }
                });
                this.movies = response.data.docs;
            } 
            catch (error) {
            console.error('Error fetching movies:', error);
            }
        },
        onSearch(query) {
            this.$router.push({ name: 'SearchResults', params: { query } });
        },
        filterByRating() {
            this.movies = this.movies.filter(movie => movie.rating.kp > 9);
        },
        filterByYear() {
            this.movies = this.movies.filter(movie => new Date(movie.year).getFullYear() > 2000);
        }
    }
};
 </script>