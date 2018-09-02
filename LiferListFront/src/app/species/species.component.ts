import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../service/species.service';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  speciesMaster:Object;

  constructor(private SpeciesList : SpeciesService) { }

  ngOnInit() {
    this.SpeciesList.getAllSpeciesData().subscribe(data => {
      console.log(data);
      this.speciesMaster = data;
    });
  }

}
