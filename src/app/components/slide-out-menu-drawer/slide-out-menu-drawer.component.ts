import { Component } from "@angular/core";

@Component({
  selector: "app-slide-out-menu-drawer",
  standalone: true,
  templateUrl: "./slide-out-menu-drawer.component.html",
  styleUrls: ["./slide-out-menu-drawer.component.scss"],
})
export class SlideOutMenuDrawerComponent {
  // Simple demo data (change later if you want inputs/ng-content)
  items = Array.from({ length: 15 }, (_, i) => `Menu Item ${String(i + 1).padStart(2, "0")}`);
}
