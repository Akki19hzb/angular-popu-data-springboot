import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../population/population.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public population_result = [];

  public errorMsg;
  constructor(private populationService: PopulationService) { }

  ngOnInit() {
    this.populationService.getPopulation().
                subscribe(data => this.population_result = data,
                error => this.errorMsg = error);
  }


}
