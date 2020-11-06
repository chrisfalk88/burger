

// add a new burger from the form 
$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burgerName").val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  //click handler to change devoured state 
$(".devourButton").on("click", function(event){
  const id = $(this).data("id");
  console.log(id);

  $.ajax("/api/burgers/" + id, {
    type: "PUT"
  }).then(function() {
    console.log("devoured state was changed");
    location.reload();
  });
})
