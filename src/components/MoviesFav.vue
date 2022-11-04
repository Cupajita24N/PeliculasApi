<template>
  <div class="mx-auto my-12">
    <h2 class="mt-2 mx-4 grey--text">Peliculas Favoritas</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="2" v-for="movie in arrFinal" :key="movie.id">
          <MovieCard :movie="movie" :genres="genres" />

          <div class="text-center">
            <v-btn
              class="mx-2 my-2"
              fab
              dark
              small
              color="error"
              @click="deleteFav(movie.id)"
            >
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn
            class="mx-2"
            color="primary"
            elevation="4"
            rounded
            v-on:click.prevent="previous()"
          >
            <v-icon dark> fas fa-step-backward </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            color="primary"
            elevation="4"
            rounded
            v-on:click.prevent="next()"
          >
            <v-icon dark> fas fa-step-forward </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
let currentPage = 1;
import MovieCard from "../components/MovieCard";
export default {
  components: {
    MovieCard,
  },
  data: function () {
    return {
      movies: [],
      genres: [],
      arrFinal: [],
      favoritos: [],
      temp: [1],
      active: 0,
    };
  },
  async mounted() {
    this.arrFinal = JSON.parse(localStorage.getItem("favoritos")) || [];
    this.fetchGenres(currentPage);
  },
  computed: {},
  methods: {
    deleteFav(movie) {
      // console.log(this.arrFinal, "antes");
      this.arrFinal = this.arrFinal.filter((peli) => peli.id !== movie);
      localStorage.setItem("favoritos", JSON.stringify(this.arrFinal));

      // console.log(this.arrFinal, "despues");
      // localStorage.removeItem("favoritos", movie);
    },
    async fetchGenres(page) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/movie/popular?page=" + page
        );
        this.movies = response.data.results.slice(0, 12);
      } catch (error) {
        console.log(error);
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          currentPage += 1;
          this.fetchGenres((currentPage += 1));
        }
      };
    },

    next() {
      currentPage += 1;
      this.fetchGenres(currentPage);
    },
    previous() {
      currentPage -= 1;
      this.fetchGenres(currentPage);
    },
  },
};
</script>

<style >
</style>