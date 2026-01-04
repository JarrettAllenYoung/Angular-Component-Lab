import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

export type RadioGroupOption = {
  id: string;          // used for input id + label for=
  value: string;       // emitted value
  title: string;       // "Basic"
  description: string; // the paragraph text
  imgSrc?: string;
  imgAlt?: string;
  disabled?: boolean;
};

@Component({
  selector: "app-radio-group",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./radio-group.component.html",
  styleUrls: ["./radio-group.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
  @Input() title = "";
  @Input() name = "plan";
  @Input() options: RadioGroupOption[] = [];

  /** controlled value (supports banana-in-a-box: [(value)] ) */
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string>();

  @Input() disabled = false;

  onSelect(next: string) {
    if (this.disabled) return;
    if (this.value === next) return;
    this.value = next;
    this.valueChange.emit(next);
  }

  isChecked(opt: RadioGroupOption) {
    return this.value === opt.value;
  }

  trackById(_: number, opt: RadioGroupOption) {
    return opt.id;
  }
}
