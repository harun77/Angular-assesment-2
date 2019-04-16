import { Component } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor(private swapiService: SwapiService) { }
  ngOnInit() {
    this.swapiService.getData().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  sort(prop: string) {
    this.data.results = _.sortBy(this.data.results, prop);
  }

  compare(first: any, second: any) {
    if (first.last_nom < second.last_nom)
      return -1;
    if (first.last_nom > second.last_nom)
      return 1;
    return 0;
  }
}
