var apiKey = "a06d1bc5f6a52079c420fdbf5cc6d9dc";
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
   

    var queryURL = "https://api.edamam.com/api/food-database/parser?&app_id=85e120b2&app_key=a06d1bc5f6a52079c420fdbf5cc6d9dc&callback=?&ingr=" + selectedIngredient;

    //var queryURL = "https://api.edamam.com/api/food-database/parser&ingr=" + selectedIngredient + "&app_id=$95575680&app_key=$a06d1bc5f6a52079c420fdbf5cc6d9dc&from=0&to=10&calories=" + selectedCalorie + "&healthLabels=" + selectedAllergy;
   /// var queryURL ="https://api.edamam.com/api/food-database/parser?&app_id=85e120b2&app_key=a06d1bc5f6a52079c420fdbf5cc6d9dc&ingr=" + selectedIngredient;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
             console.log(response.hints);
           
        //puts response hits into variable so hits can be interated through
            var responsehints = response.hints;
         //*---------------------LOOPS THROUGH RECPIE HITS AND OUTPUTS THE INGREDIENT LINES-----------------*/   
            for (i = 0; i < responsehints.length; i++) {
                //Contains output results from API with recipe hits that match query.
                    var outputResults = responsehints[i];
                    //following is a test for if outputResults is pulling info and what info it is pulling
                    // console.log(outputResults);
                    // console.log(outputResults.recipe);
                    console.log(outputResults.food.nutrients)
                    //stores ingredient output into variable that will be appeneded.
                    console.log(outputResults.food.label);
                    //output for title
                    var titleOutput = outputResults.food.label;
                    //output for ingrdients
                    var nutrientsResults = outputResults.food.nutrients;
                    //output for URL
                    var urlOutputResults = outputResults.measures.uri;
            }
      });
    

    });




  