import { Component } from "@angular/core";
import { NgFor, NgIf, NgTemplateOutlet } from "@angular/common";

type AccordionItem = {
  id: string;
  title: string;
  body: string;
  children?: AccordionItem[];
};

@Component({
  selector: "app-css-accordion",
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: "./css-accordion.component.html",
  styleUrls: ["./css-accordion.component.scss"],
})
export class CssAccordionComponent {
  // Control nesting here: add `children` under any item
  items: AccordionItem[] = [
    {
      id: "faq-drawer-1",
      title: "DRAWER ONE",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      children: [
        {
          id: "faq-drawer-1-1",
          title: "Nested One",
          body: "Nested content inside Drawer One.",
        },
        {
          id: "faq-drawer-1-2",
          title: "Nested Two",
          body: "More nested content inside Drawer One.",
          children: [
            {
              id: "faq-drawer-1-2-1",
              title: "Nested Two → DEEPER",
              body: "Yep — you can nest multiple levels if you want.",
            },
          ],
        },
      ],
    },
    {
      id: "faq-drawer-2",
      title: "DRAWER TWO",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      children: [
        {
          id: "faq-drawer-2-1",
          title: "Drawer Two Nested",
          body: "Nested content under Drawer Two.",
        },
      ],
    },
    {
      id: "faq-drawer-3",
      title: "DRAWER THREE",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
}
