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
  pages = [];
  constructor( private wikipedia: WikipediaService, private car: Car ){

  }

  onTermx(term: string){
    //console.log('I the app and this is the term inside app component', term)
    const results = this.wikipedia.search(term);
    console.log(results);
    console.log('My car has color an property = ' ,this.car.color)
   
  }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(response);
    });
  }
   
  

}


// // Good!!! .....in theory
// // But angular does this with injection in constructor of a component
// const car = new Car();
// const wikipedia = new WikipediaService();
// new AppComponent(wikipedia,car );
