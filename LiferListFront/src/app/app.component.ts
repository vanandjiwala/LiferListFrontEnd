import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LiferListFront';
  activeComponent;
  $: any;

  selectHome(id: number){
    this.activeComponent = id;
  }
}

