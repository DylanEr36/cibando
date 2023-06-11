import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipe.mock';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = '/api/recipes';
  datiRicetta = new ReplaySubject();

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // return of (RECIPES);
    // return this.http.get<Recipe[]>(this.apiBaseUrl + '/');
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
  }

  // versione con mock
  // getRecipe(id:number): Observable<Recipe | undefined > {
  //   const recipe = RECIPES.find(ricetta => ricetta._id === id);
  //   return of (recipe);
  // }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }

  deleteRecipe(id:string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiBaseUrl}/${id}`);
  }

  createRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipe);
  }

}

