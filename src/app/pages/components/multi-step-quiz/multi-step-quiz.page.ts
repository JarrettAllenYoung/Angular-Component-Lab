import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MultiStepQuizComponent } from '../../../components/multi-step-quiz/multi-step-quiz.component';

@Component({
  selector: 'app-multi-step-quiz-page',
  standalone: true,
  imports: [RouterLink, MultiStepQuizComponent],
  templateUrl: './multi-step-quiz.page.html',
  styleUrl: './multi-step-quiz.page.css',
})
export class MultiStepQuizPageComponent {}
