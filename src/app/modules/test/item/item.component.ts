import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../../../core/services/test.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  testService: TestService;

  constructor(testService: TestService) {
    this.testService = testService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    this.testService.onSideChosen({ name: this.character.name, side: side });
  }
}
