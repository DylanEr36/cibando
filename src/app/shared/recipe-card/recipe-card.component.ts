import { RecipeService } from 'src/app/services/recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.recipes = res;
        console.log(this.recipes)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}