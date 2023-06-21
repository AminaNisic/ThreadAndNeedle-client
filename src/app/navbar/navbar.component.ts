import { Component, OnInit } from '@angular/core';
import { Collapse, Dropdown, initTE } from 'tw-elements';

initTE({ Collapse, Dropdown });

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initTE({ Collapse, Dropdown });
  }

}
