import { Component, OnInit } from '@angular/core';
import { FoodorderService } from '../services/foodorder/foodorder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  foods:string[]=[];

  constructor(private fs:FoodorderService){}

  ngOnInit(): void {
    this.foods=this.fs.getAll();
    
  }

}
