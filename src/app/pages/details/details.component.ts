import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  constructor(private api:ApiService, private activated:ActivatedRoute) { }

  recipe:any;
  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get('id');
    this.api.getRecipe(id).subscribe((res:any) => {
      this.recipe = res;
      console.log(this.recipe);
    });
    
  }

}
