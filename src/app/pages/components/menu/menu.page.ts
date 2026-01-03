import { Component } from "@angular/core";
import { RouterLink } from '@angular/router';
import { SlideOutMenuDrawerComponent } from "../../../components/slide-out-menu-drawer/slide-out-menu-drawer.component";

@Component({
  selector: "app-menu-page",
  standalone: true,
  imports: [RouterLink, SlideOutMenuDrawerComponent],
  templateUrl: "./menu.page.html",
})
export class MenuPage {}
