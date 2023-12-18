const filmTitle = document.getElementById("title");
const movie = {
    title: "Uncharted",
    director: "Ruben Flaysher",
    year: 2022,
    rating: 6,
    goodRating() {
        if (this.rating > 8) {
            console.log("true")
            filmTitle.style.color = "green"
            filmTitle.textContent = this.title
        } else {
            console.log("false")
            filmTitle.style.color = "red"
            filmTitle.textContent = this.title
        }
    }
}
movie.goodRating()
