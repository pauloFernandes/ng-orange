import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ChannelsService } from '../../shared/channels.service';
import { FormGroup, FormControl } from '@angular/forms';
import Slack from 'src/app/shared/interfaces/Slack';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  slack: Observable<{}>
  slackForm = new FormGroup({
    key: new FormControl(''),
    channel: new FormControl(''),
  });
  userId: String = '';
  constructor(
    private route: ActivatedRoute,
    private channelsService: ChannelsService,
    public dialog:MatDialog
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId')
        this.channelsService.initializePath('slack');
        return this.channelsService.get(this.userId);
      }),
    ).subscribe(slack => {
      this.slackForm.patchValue(slack);
    });
  }

  save(slack:Slack) {
    return this.channelsService.update(slack);
  }
}
