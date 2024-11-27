<template>
    <div>
        <AppHeader />
        <div class="container mt-4">
            <SearchForm @search="onSearch" />
            <div class="row mt-3">
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
    name: 'MoviesPage',
    components: { AppHeader, SearchForm, MovieList },
    data() {
        return {
            movies: []
        };
    },
    watch: {
        '$route.params.query': 'searchMovies'
    },
    created() {
        this.searchMovies(this.$route.params.query);
    },
    methods: {
        async searchMovies(query) {
            if (!query) return;
            try {
                const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie', {
                    headers: {
                        'X-API-KEY': '7HGB3NH-5YCMWDR-MB99QYW-068XPS7'
                    },
                    params: {
                        search: query,
                        limit: 20
                    }
                });
                this.movies = response.data.docs;
            }
            catch (error) {
                console.error('Error searching movies:', error);
            }
        },
        onSearch (query) {
            this.$router.push({ name: 'SearchResults', params: { query } });
        }
    }
};
</script>