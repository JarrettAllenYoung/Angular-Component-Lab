import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import {
  FaqAccordionComponent,
  FaqAccordionItem,
} from "../../../components/faq-accordion/faq-accordion.component";
import { FAQ_ACCORDION_ITEMS } from "./accordion.data";

@Component({
  selector: "app-accordion-page",
  standalone: true,
  imports: [CommonModule, RouterLink, FaqAccordionComponent],
  templateUrl: "./accordion.page.html",
})
export class AccordionPageComponent {
  faqItems = FAQ_ACCORDION_ITEMS;
}
