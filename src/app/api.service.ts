import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  data:any;

  getRecipes() {
    return this.http.get('https://dummyjson.com/recipes');
  }

  getRecipe(id:any) {
    return this.http.get(`https://dummyjson.com/recipes/${id}`);
  }
}
