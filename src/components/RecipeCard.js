import React from "react";

class RecipeCard extends React.Component {
  render() {
    return (
        <div>
        <div className="button-container">
        <a class="waves-effect waves-light btn-large" onClick={this.props.handleClick}>New recipe</a>
        </div>
      <div className="row">
        <div className="col s6"><img src={this.props.mealNameThumb} alt="Not found" width="100%"></img></div>
        <div className="col s6">
        <h2 className="deep-orange-text">{this.props.mealName}</h2>
        <p><b>Category:</b> {this.props.mealCategory}</p>
        <ul><b>Ingredients:</b><br/>
        <li>{this.props.measure1} {this.props.ingredient1}</li>
        <li>{this.props.measure2} {this.props.ingredient2}</li>
        <li>{this.props.measure3} {this.props.ingredient3}</li>
        <li>{this.props.measure4} {this.props.ingredient4}</li>
        <li>{this.props.measure5} {this.props.ingredient5}</li>
        <li>{this.props.measure6} {this.props.ingredient6}</li>
        <li>{this.props.measure7} {this.props.ingredient7}</li>
        <li>{this.props.measure8} {this.props.ingredient8}</li>
        <li>{this.props.measure9} {this.props.ingredient9}</li>
        <li>{this.props.measure10} {this.props.ingredient10}</li>
        <li>{this.props.measure11} {this.props.ingredient11}</li>
        <li>{this.props.measure12} {this.props.ingredient12}</li>
        <li>{this.props.measure13} {this.props.ingredient13}</li>
        <li>{this.props.measure14} {this.props.ingredient14}</li>
        <li>{this.props.measure15} {this.props.ingredient15}</li>
        <li>{this.props.measure16} {this.props.ingredient16}</li>
        <li>{this.props.measure17} {this.props.ingredient17}</li>
        <li>{this.props.measure18} {this.props.ingredient18}</li>
        <li>{this.props.measure19} {this.props.ingredient19}</li>
        <li>{this.props.measure20} {this.props.ingredient20}</li>
        </ul>
        <p><b>Instructions:</b><br/> {this.props.instructions}</p>
        </div>
        </div>

        <div className="col s12 center-align">
        <iframe title="Video recipe" width="840" height="630"
        src={this.props.mealVideo}>
        </iframe>
        </div>
        </div>
    );
  }
}

export default RecipeCard;
