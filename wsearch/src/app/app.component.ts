import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';


@Injectable({providedIn: 'root'})
export class Car {
  color = 'red';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wikipedia: WikipediaService, private car: Car ){

  }

  onTerm(term: string){
    //console.log('I the app and this is the term inside app component', term)
    const results = this.wikipedia.search(term);
    console.log(results);
    console.log('My car has color an property = ' ,this.car.color)
   
  }
}

// // Good!!! .....in theory
// // But angular does this with injection in constructor of a component
// const car = new Car();
// const wikipedia = new WikipediaService();
// new AppComponent(wikipedia,car );
