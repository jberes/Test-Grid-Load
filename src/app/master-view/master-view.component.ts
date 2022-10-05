import { Component, OnInit } from '@angular/core';
import { AutoUsersService } from '../services/auto-users.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public autoUsersPeopleWithCars: any = null;

  constructor(
    private autoUsersService: AutoUsersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.autoUsersService.getPeopleWithCars().subscribe(data => this.autoUsersPeopleWithCars = data);
  }
}
