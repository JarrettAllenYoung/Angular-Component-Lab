import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CssAccordionComponent } from "../../../components/css-accordion/css-accordion.component";

@Component({
  selector: "app-css-accordion-page",
  standalone: true,
  imports: [RouterLink, CssAccordionComponent],
  templateUrl: "./css-accordion.page.html",
})
export class CssAccordionPage {}
