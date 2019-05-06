var formButton = document.getElementById("searchButton")
var searchForm = document.getElementById("searchForm")

formButton.addEventListener("click", function (evt){
  evt.preventDefault();
  searchForm.classList.toggle("search-form--show");
});