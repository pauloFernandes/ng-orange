import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gitlab-form',
  templateUrl: './gitlab-form.component.html',
  styleUrls: ['./gitlab-form.component.css']
})
export class GitlabFormComponent implements OnInit {
  @Input() projectForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
