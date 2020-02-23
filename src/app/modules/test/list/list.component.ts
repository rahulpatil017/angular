import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../../../core/services/test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activatedRoute: ActivatedRoute;
  testService: TestService;

  constructor(activatedRoute: ActivatedRoute, testService: TestService) {
    this.activatedRoute = activatedRoute;
    this.testService = testService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.testService.getCharacters(params.side)
      }
    );
  }

}
