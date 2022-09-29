import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss']
})
export class ChuckNorrisComponent implements OnInit {
  constructor(private jokesService: JokesService) {}

  joke: Record<string, [] | string> = {};

  ngOnInit(): void {
    console.log('chuck-norris works!');
    this.retrieveJokes();
  }

  retrieveJokes() {
    this.jokesService.getJokes().subscribe((response) => {
      this.joke = response;
      console.log(response);
    });
  }
}
