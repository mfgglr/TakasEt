import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent  implements OnInit {

  @Input() userIds? : number[] | null;

  constructor() { }

  ngOnInit() {}

}
