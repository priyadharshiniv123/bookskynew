var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
   popupoverlay.style.display="block"
   popupbox.style.display="block"
})

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container");
var addBookButton = document.getElementById("add-book"); // Corrected typo (capital B)
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addBookButton.addEventListener("click", function (event) {
  event.preventDefault();

  var newBookEntry = document.createElement("div");
  newBookEntry.classList.add("book-container");

  var bookTitle = document.createElement("h2");
  bookTitle.textContent = bookTitleInput.value;
  var bookAuthor = document.createElement("h5");
  bookAuthor.textContent = bookAuthorInput.value;
  var bookDescription = document.createElement("p");
  bookDescription.textContent = bookDescriptionInput.value;
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";  

  newBookEntry.appendChild(bookTitle);
  newBookEntry.appendChild(bookAuthor);
  newBookEntry.appendChild(bookDescription);
  newBookEntry.appendChild(deleteButton);

  container.appendChild(newBookEntry);

  deleteButton.addEventListener("click", function () {
    // Remove the entire book entry (parent element of the button)
    this.parentElement.remove();
  });

  
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

