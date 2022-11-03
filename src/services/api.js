import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGU3ODljMjQzMmUxMWExNzBiN2U5ODAyOWVjZjIwOSIsInN1YiI6IjYzNjNiNzIxMDkxZTYyMDA3YTFhZDhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOSGAB2d892Em0Ex9aBpq851hBhxAOflaDbUo9Jjoz0";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})