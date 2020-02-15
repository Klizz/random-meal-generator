import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import recipes from "./Recipe";

class RecipeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            recipe: []
        }
    };

    // GENERA RECETA AL AZAR
    newRecipe() {
        const random = Math.floor(Math.random() * recipes.length);
        return recipes[random]
      }

    // BOTON
    handleClick = () => {
        const generateRecipe = this.newRecipe();
        this.setState({
            mealName: generateRecipe.mealName,
            mealCategory: generateRecipe.mealCategory,
            mealNameThumb: generateRecipe.mealNameThumb,
            instructions: generateRecipe.instructions,
            mealVideo: generateRecipe.mealVideo,
            ingredient1: generateRecipe.ingredient1,
            ingredient2: generateRecipe.ingredient2,
            ingredient3: generateRecipe.ingredient3,
            ingredient4: generateRecipe.ingredient4,
            ingredient5: generateRecipe.ingredient5,
            ingredient6: generateRecipe.ingredient6,
            ingredient7: generateRecipe.ingredient7,
            ingredient8: generateRecipe.ingredient8,
            ingredient9: generateRecipe.ingredient9,
            ingredient10: generateRecipe.ingredient10,
            ingredient11: generateRecipe.ingredient11,
            ingredient12: generateRecipe.ingredient12,
            ingredient13: generateRecipe.ingredient13,
            ingredient14: generateRecipe.ingredient14,
            ingredient15: generateRecipe.ingredient15,
            ingredient16: generateRecipe.ingredient16,
            ingredient17: generateRecipe.ingredient17,
            ingredient18: generateRecipe.ingredient18,
            ingredient19: generateRecipe.ingredient19,
            ingredient20: generateRecipe.ingredient20,
            measure1: generateRecipe.measure1,
            measure2: generateRecipe.measure2,
            measure3: generateRecipe.measure3,
            measure4: generateRecipe.measure4,
            measure5: generateRecipe.measure5,
            measure6: generateRecipe.measure6,
            measure7: generateRecipe.measure7,
            measure8: generateRecipe.measure8,
            measure9: generateRecipe.measure9,
            measure10: generateRecipe.measure10,
            measure11: generateRecipe.measure11,
            measure12: generateRecipe.measure12,
            measure13: generateRecipe.measure13,
            measure14: generateRecipe.measure14,
            measure15: generateRecipe.measure15,
            measure16: generateRecipe.measure16,
            measure17: generateRecipe.measure17,
            measure18: generateRecipe.measure18,
            measure19: generateRecipe.measure19,
            measure20: generateRecipe.measure20,
        });
        
    }

    // ACTUALIZAR ESTADO
    currentRecipe = () => {
        this.setState({
            recipe: recipes
        })
    }
    render() {
        return(
            <div>
                 < RecipeCard handleClick={ this.handleClick } {...this.state}
                 />
             </div>
            )
          }
}
export default RecipeGenerator;