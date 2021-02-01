import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"],
})
export class BaseComponent implements OnInit {
  @ViewChild("home") public drawer: MatDrawer;
  isShowing: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.drawer.toggle();
    this.isShowing = !this.isShowing;
    console.log(this.isShowing);
  }
}
