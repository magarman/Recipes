# Recipes
This is an app that will provide recipes after option boxes have been selected and the submit button pressed. The information output should provide a title of the recipe, the list of ingredients used, a url linking to the original recipe that includes the instructions for the recipe, an image of the meal, calories/nutrients of each meal.

***How it Works***
1. Select chicken, beef, or vegan.
2. Select a range for calories. You can also choose the don't care option if amount of calories doesn't matter.
3. If you have a food allergy, you can choose to exclude the allergen. 
4. Once options have been selecte, the submit button.
5. In order to display the calories, click the "Calories Per Serving" button.

***Known issues***
- The calories/nutrients will display at the bottom the page rather than with the recipes. This is because the nutrients should have been looped through per line but instead were appended to the same location in the div.

**2 APIs used**
1: Recipe API from recipe: https://developer.edamam.com/edamam-docs-recipe-api
2: Nutrients API from Food API: https://developer.edamam.com/food-database-api-docs

Link to live Gitpage: https://magarman.github.io/Recipes/
