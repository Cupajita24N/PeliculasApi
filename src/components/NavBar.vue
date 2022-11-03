<template>
  <nav>
     <v-system-bar app dark>
          <v-spacer></v-spacer>
      </v-system-bar>
      <v-app-bar app color="black" dark>
          <v-icon class="mr-2">fas fa-video</v-icon>
          <v-toolbar-title>Peliculas</v-toolbar-title>
          <v-btn text class="ml-2" to="/">Peliculas</v-btn>
          <v-btn text class="ml-2" to="/actors">Actores</v-btn>
          <v-btn text class="ml-2" to="/agregar">Favoritos</v-btn>
          <v-spacer></v-spacer>
          <v-autocomplete
          clearable
          hide-no-data
          hide-selected
          color="white"
          label="Buscar..."
          prepend-inner-icon="search"
          flat
          :items="movies"
          item-text="title"
          item-value="id"
          id="search"
          >
            <template v-slot:item="{item}">
                <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
            </template>
          </v-autocomplete>         
      </v-app-bar>
  </nav>
</template>

<script>
export default {
    data:()=>({
        drawer:null,
        model:'',
        search:null,
        movies: []
    }),
    mounted(){
        this.loadMovies();
    },
    methods: {
        loadMovies: async function() {
            try{
                const response = await this.$http.get("/movie/popular");
                this.movies = response.data.results;
                
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>