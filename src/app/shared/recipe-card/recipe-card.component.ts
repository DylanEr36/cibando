import { RecipeService } from 'src/app/services/recipe.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[];
  @Output() messaggio = new EventEmitter();

  constructor(private recipeService: RecipeService){}

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }

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
