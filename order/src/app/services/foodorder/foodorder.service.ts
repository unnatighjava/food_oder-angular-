import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodorderService {

  constructor() { }


  getAll():string[]{
    return[
      '/assets/img1.jpeg',
      '/assets/img2.webp',
      '/assets/img3.jpeg',
      '/assets/img4.jpeg',
    ]
  }
}
