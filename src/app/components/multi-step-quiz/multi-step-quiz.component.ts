import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type QuizOption = {
  label: string;
  value: string;
};

type QuizQuestion = {
  key: string; // "q1", "q2", ...
  title: string;
  options: QuizOption[];
};

@Component({
  selector: 'app-multi-step-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-step-quiz.component.html',
  styleUrl: './multi-step-quiz.component.css',
})
export class MultiStepQuizComponent {
  readonly questions: QuizQuestion[] = [
    {
      key: 'q1',
      title: "What's your favorite programming language?",
      options: [
        { label: 'JavaScript', value: 'javascript' },
        { label: 'Python', value: 'python' },
        { label: 'Java', value: 'java' },
        { label: 'C++', value: 'cpp' },
      ],
    },
    {
      key: 'q2',
      title: 'Which web framework do you prefer?',
      options: [
        { label: 'React', value: 'react' },
        { label: 'Vue.js', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' },
        { label: 'Next.js', value: 'nextjs' },
      ],
    },
    {
      key: 'q3',
      title: "What's your preferred development environment?",
      options: [
        { label: 'VS Code', value: 'vscode' },
        { label: 'IntelliJ IDEA', value: 'intellij' },
        { label: 'Sublime Text', value: 'sublime' },
        { label: 'Vim', value: 'vim' },
      ],
    },
  ];

  currentIndex = 0;
  showResult = false;

  // answers: { q1: 'javascript', q2: 'react', ... }
  answers: Record<string, string> = {};

  get totalSteps() {
    return this.questions.length;
  }

  get currentStep() {
    return this.currentIndex + 1;
  }

  get progressPercent() {
    // matches your sample: step 1 => 0%, step 2 => 33.33%, step 3 => 66.67%, result => 100%
    if (this.showResult) return 100;
    return (this.currentIndex / this.totalSteps) * 100;
  }

  isAnswered(key: string) {
    return !!this.answers[key];
  }

  selectOption(questionKey: string, value: string) {
    const current = this.answers[questionKey];

    // click same option again => unselect
    if (current === value) {
        const next = { ...this.answers };
        delete next[questionKey];
        this.answers = next;
        return;
    }

    // otherwise select
    this.answers = { ...this.answers, [questionKey]: value };
    }

  prev() {
    if (this.currentIndex === 0) return;
    this.currentIndex -= 1;
    this.showResult = false;
  }

  next() {
    const q = this.questions[this.currentIndex];
    if (!this.isAnswered(q.key)) return;

    if (this.currentIndex < this.totalSteps - 1) {
      this.currentIndex += 1;
      return;
    }

    // last step => submit
    this.showResult = true;
  }

  restart() {
    this.answers = {};
    this.currentIndex = 0;
    this.showResult = false;
  }

  answerLabel(question: QuizQuestion) {
    const val = this.answers[question.key];
    if (!val) return '-';
    return question.options.find((o) => o.value === val)?.label ?? val;
  }
}
