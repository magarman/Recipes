 //quanity on recipes pulled

 function addHandler(){
    $(".calorie-button").click(function () {
     var recipeLabel  = $(".recipe-title").val();
     console.log(recipeLabel + "khalidtest");

//___________________function to call based on user input_________________//
//ingredients selected based off user selection 
     {
         var selectedIngredient = $("#dropDownIngredient :selected").val();
        console.log(selectedIngredient);

        var selectedCalorie = $("#dropDownCalories :selected").val();
        console.log(selectedCalorie);

        var selectedAllergy = $("#dropDownAllergy :selected").val();
        console.log(selectedAllergy);
   

    var queryURL = "https://api.edamam.com/api/food-database/parser?&app_id=85e120b2&app_key=a06d1bc5f6a52079c420fdbf5cc6d9dc&callback=?&ingr=" + selectedIngredient+ "?&label="+recipeLabel;

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
                    console.log(outputResults.food.nutrients);
                    console.log(outputResults.food.nutrients.ENERC_KCAL);
                    var calorieOutput =  outputResults.food.nutrients.ENERC_KCAL;
                    
                    var calorieResult = $("<p>").text("Calories: " + calorieOutput);
                    calorieResult.addClass('calories-display');
                    $(".calories-display").append(calorieOutput);
                    $("#workplease").append(calorieResult);

                    console.log(outputResults.food.nutrients.FAT);
                    var fatOutput = outputResults.food.nutrients.FAT;
                    var fatResult = $("<p>").text("Fat - " + fatOutput);
                    fatResult.addClass("fat-display");
                    $(".fat-display").append(fatOutput);
                    $("#workplease").append(fatResult);
                    //console.log(Math.floor(fatOutput));

                    console.log(outputResults.food.nutrients.CHOCDF);
                   var carbOutput = outputResults.food.nutrients.CHOCDF;
                   var carbResult = $("<p>").text("Carbs - " + carbOutput);
                   carbResult.addClass("carb-display");
                   $(".carb-display").append(carbOutput);
                   $("#workplease").append(carbResult);

                   console.log(outputResults.food.nutrients.PROCNT);
                   var proteinOutput = outputResults.food.nutrients.PROCNT;
                   var proteinResult = $("<p>").text("Protein - " + proteinOutput);
                   proteinResult.addClass("protein-display");
                   $(".protein-display").append(proteinOutput);
                   
                   $("#workplease").append(proteinResult);

                    //var p= $("<p>").text("Calorie: "+);
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
     }
    });
    }

