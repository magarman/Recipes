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
        console.log(typeof(selectedCalorie));

        var selectedAllergy = $("#dropDownAllergy :selected").val();
        console.log(selectedAllergy);
   

    var queryURL = "https://api.edamam.com/search?q=" + selectedIngredient + "&app_id=$95575680&app_key=$6d596b3dd3e66406691dc2abbdf63d6b&from=0&to=10&calories=" + selectedCalorie + "&healthLabels=" + selectedAllergy;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        //tests if query will generate hits     
        console.log(response.hits);
        //puts response hits into variable so hits can be interated through
            var responseHits = response.hits;
         //*---------------------LOOPS THROUGH RECPIE HITS AND OUTPUTS THE INGREDIENT LINES-----------------*/   
            for (i = 0; i < responseHits.length; i++) {
                //Contains output results from API with recipe hits that match query.
                    var outputResults = responseHits[i];
                    //following is a test for if outputResults is pulling info and what info it is pulling
                    // console.log(outputResults);
                    // console.log(outputResults.recipe);
                    console.log(outputResults.recipe.ingredientLines)
                    //stores ingredient output into variable that will be appeneded.
                    console.log(outputResults.recipe.label);
                    //output for title
                    var titleOutput = outputResults.recipe.label;
                    //output for ingrdients
                    var ingredientLinesResults = outputResults.recipe.ingredientLines;
                    //output for URL
                    var urlOutputResults = outputResults.recipe.url;
                    // console.log(typeof(ingredientLinesResults));
                    // var convertedToString = JSON.stringify(ingredientLinesResults);
                    //console.log(typeof(convertedToString + " string?"));
                    //**-----------------PRINTS OUT TITLE OF RECIPE----------------------------------------------- */
                    var recipeTitle = $("<h4>").text(titleOutput);
                    recipeTitle.addClass("recipe-title");
                    $("#workplease").append(recipeTitle);

                    //**----------------------Displays URL LINK FOR RECIPE WEBSITE-------------------------------------------- */
                    //creates ahref from api url
                    var urlLink = $("<a href>").text(urlOutputResults);
                    //adding the class for styling
                    urlLink.addClass("url-link");
                    //added link source so it goes to something
                    urlLink.attr("src", urlOutputResults);
                    //added target blank so user wouldn't be leaving website
                    urlLink.attr("target", "_blank");
                    //pushes newly created a href and api info to div
                    $("#workplease").append(urlLink);
                    //**---------------LOOPS THROUGH RECIPE INGRDIENT LINES SO THEY ARE PRINTED OUT AS A LIST----------------------------------------- */
                    for (j = 0; j < ingredientLinesResults.length; j++) {
                                console.log(ingredientLinesResults[j]);
                                var indgredientListedOutput = ingredientLinesResults[j];
                   

                    //creates DIV where output of results will go
                     var recipeDiv = $("<div>");
                    //adding class for styling recipe paragraphs
                     recipeDiv.addClass("recipe-output");
                     //heading
                     
                     //creating listed item tags for info display
                     var recipeDisplay = $("<li>").text(indgredientListedOutput);
                    //appends recipes info to created div
                     recipeDiv.append(recipeDisplay);
                    $("#workplease").append(recipeDiv);
                }
            }
            



            ///tests for API responses
             console.log(response.hits[0].recipe.ingredientLines);
             console.log(response.hits[0].recipe.calories);
             console.log(response.hits[0].recipe.dietLabels);
             console.log(response.hits[0].recipe.healthLabels);
             console.log(response.hits[0].recipe.url); //calories are in total recipe so not per serving
      });
    

    });


