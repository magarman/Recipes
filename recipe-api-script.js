var apiKey = "6d596b3dd3e66406691dc2abbdf63d6b";
    //quanity on recipes pulled

    //ingredints (chicken) 
    var ingredients = ["chicken", "beef", "vegan"];
    //calories
    var calories = [600, 800, 1000];
    //allergies (health)
    var allergies = ["crustacean-free", "dairy-free	", "gluten-free", "peanut-free"];

//___________________function to call based on user input_________________//
//ingredients selected based off user selection 
    $("#submit").click(function() {
         var selectedIngredient = $("#dropDownIngredient :selected").val();
        console.log(selectedIngredient);

        var selectedCalorie = $("#dropDownCalories :selected").val();
        console.log(selectedCalorie);

        var selectedAllergy = $("#dropDownAllergy :selected").val();
        console.log(selectedAllergy);
   

    var queryURL = "https://api.edamam.com/search?q=" + selectedIngredient + "&app_id=$95575680&app_key=$6d596b3dd3e66406691dc2abbdf63d6b&from=0&to=10&calories=" + selectedCalorie + "-722&healthLabels=" + selectedAllergy;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
             console.log(response);
             console.log(response.hits[0].recipe.ingredientLines);
             console.log(response.hits[0].recipe.calories);
             console.log(response.hits[0].recipe.dietLabels);
             console.log(response.hits[0].recipe.healthLabels);
             console.log(response.hits[0].recipe.url); //calories are in total recipe so not per serving
      });
    

    });




  