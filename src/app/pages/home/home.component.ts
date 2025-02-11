import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(private api:ApiService) { }

  recipes:any;
  ngOnInit() {
    this.api.getRecipes().subscribe((res:any) => {
      this.recipes = res.recipes;
      
    });
  }

}
