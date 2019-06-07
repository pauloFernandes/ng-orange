import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toggl-form',
  templateUrl: './toggl-form.component.html',
  styleUrls: ['./toggl-form.component.css']
})
export class TogglFormComponent implements OnInit {
  @Input() projectForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
