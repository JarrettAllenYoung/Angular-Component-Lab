import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import {
  RadioGroupComponent,
  RadioGroupOption,
} from "../../../components/radio-group/radio-group.component";

@Component({
  selector: "app-radio-group-page",
  standalone: true,
  imports: [CommonModule, RouterLink, RadioGroupComponent],
  templateUrl: "./radio-group.page.html",
  styleUrls: ["./radio-group.page.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupPage {
  selectedPlan = "basic";

  options: RadioGroupOption[] = [
    {
      id: "basic",
      value: "basic",
      title: "Basic",
      description: "For smaller business, with simple salaries and pay schedules.",
      imgSrc: "https://ismailvtl-images-project.vercel.app/life-saver-img.svg",
      imgAlt: "",
    },
    {
      id: "complete",
      value: "complete",
      title: "Complete",
      description:
        "For growing business who wants to create a rewarding place to work.",
      imgSrc: "https://ismailvtl-images-project.vercel.app/potted-plant-img.svg",
      imgAlt: "",
    },
  ];
}
