import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

  formNewRecipe = new FormGroup({
    titolo: new FormControl('', Validators.required),
    descrizione: new FormControl('', Validators.required),
    immagine: new FormControl('', Validators.required)
  });

  constructor(private recipeService: RecipeService, private router: Router){}

  onSubmit(){
    console.log(this.formNewRecipe.value)

    const ricetta = {title: this.formNewRecipe.value.titolo, description: this.formNewRecipe.value.descrizione, image: this.formNewRecipe.value.immagine}
    this.recipeService.createRecipe(ricetta).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['home']);
      },
      error: (err) => console.log(err)
    })
  }

}
