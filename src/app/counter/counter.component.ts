import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html', //donde se encuentra el html
  styleUrls: ['./counter.component.css'] //donde se encuentran los estilos
})
export class CounterComponent {

  counter = 0;
  activeDecrease = false;

 increase(){
  // this.counter = this.counter +1;
  this.counter++;
 }

 decrease(){
  // this.counter = this.counter -1;
  this.counter--;
 }

 inactiveDecrease(){
  this.activeDecrease = !this.activeDecrease;
 }
}