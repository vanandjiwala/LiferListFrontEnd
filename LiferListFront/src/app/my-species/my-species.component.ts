import { MySpeciesService } from './../service/my-species-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-species',
  templateUrl: './my-species.component.html',
  styleUrls: ['./my-species.component.css']
})
export class MySpeciesComponent implements OnInit {

  message:Object;

  constructor(private mySpeciesList: MySpeciesService) { }

  ngOnInit() {
    this.mySpeciesList.getMySpeciesData().subscribe(data => {
      console.log(data);
      this.message = data;
    });
  }

}
