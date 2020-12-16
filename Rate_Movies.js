// This variable tracks which movie is selected
let moviePosition = 0;

// This is an array of all movies in the table
let allMovies = [];

$(function(){
    // This will attach new movies to the table when clicking the submit button
    $("#movie-form").on('submit', function(e){
        e.preventDefault();
        let movieTitle = $("#movieTitle").val();
        let movieRating = $("#movieRating").val();
        let currentMovie = {movieTitle, movieRating, moviePosition};
        let movieRow = createMovieRow(currentMovie);
        $("#table-body").append(movieRow);
        $("#movie-form").trigger("reset");
        allMovies.push(currentMovie);
        moviePosition++;
    });

    // This will delete movies from the list by finding, removing from array, and removing from the DOM
    $("tbody").on("click", ".btn.btn-danger", function(e) {
        let movieIndex = allMovies.findIndex(movie => movie.currentId === +$(e.target).data("deleteId"))
        allMovies.splice(movieIndex, 1)
        $(e.target)
          .closest("tr")
          .remove();
      });
})

// This function will create the row that needs to be appended to the Movie Table
function createMovieRow(movieInfo) {
    return `
      <tr>
        <td>${movieInfo.movieTitle}</td>
        <td>${movieInfo.movieRating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${movieInfo.moviePosition}>
            Delete
          </button>
        </td>
      <tr>
    `;
  };