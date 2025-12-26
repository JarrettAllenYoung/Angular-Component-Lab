import { CommonModule } from "@angular/common";
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

export type FaqAccordionItem = {
  title: string;
  contentHtml: string;
};

@Component({
  selector: "app-faq-accordion",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./faq-accordion.component.html",
  styleUrls: ["./faq-accordion.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAccordionComponent {
  @Input() id = "faq";
  @Input() allowMultiple = true;
  @Input() startOpenIndexes: number[] = [];
  @Input() items: FaqAccordionItem[] = [];

  private openSet = new Set<number>();

  ngOnInit() {
    (this.startOpenIndexes || []).forEach((i) => this.openSet.add(i));
  }

  isOpen(i: number) {
    return this.openSet.has(i);
  }

  toggle(i: number) {
    const isOpen = this.openSet.has(i);

    if (this.allowMultiple) {
      if (isOpen) this.openSet.delete(i);
      else this.openSet.add(i);
      return;
    }

    this.openSet.clear();
    if (!isOpen) this.openSet.add(i);
  }

  buttonId(i: number) {
    return `accordion-button-${this.id}-${i}`;
  }

  panelId(i: number) {
    return `accordion-panel-${this.id}-${i}`;
  }
}
