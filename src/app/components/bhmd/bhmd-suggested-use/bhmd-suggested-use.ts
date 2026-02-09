import { Component } from '@angular/core';

export type BhmdSuggestedUseStep = {
  stepNumber: number;
  imageSrc: string;
  imageAlt: string;
  headingHtml: string;
  bodyHtml: string;
};

const STEPS: BhmdSuggestedUseStep[] = [
  {
    stepNumber: 1,
    imageSrc: '/images/bhmd/suggested-use/step-1.webp',
    imageAlt: 'Step 1',
    headingHtml: '<strong>Step 1:</strong>',
    bodyHtml:
      'A good cleanser is the backbone of any skincare routine, and you can’t find one better than <strong>Refresh + Renew Cleansing Gel</strong>. For a powerful but nourishing deep clean, simply apply a dime-sized amount onto wet palms and create a lather. Gently massage into damp skin using an upward, circular motion. Rinse with lukewarm water.',
  },
  {
    stepNumber: 2,
    imageSrc: '/images/bhmd/suggested-use/step-2.webp',
    imageAlt: 'Step 2',
    headingHtml: '<strong>Step 2:</strong>',
    bodyHtml:
      'Next, prep and refresh your skin with <strong>Moisture Lock Botanical Essence</strong>. Using your hands, gently pat a quarter-sized amount of Moisture Lock into your skin. Allow it to absorb for 30 seconds to 1 minute before moving on to the next step.',
  },
  {
    stepNumber: 3,
    imageSrc: '/images/bhmd/suggested-use/step-3.webp',
    imageAlt: 'Step 3',
    headingHtml: '<strong>Step 3:</strong>',
    bodyHtml:
      'To support your skin’s elasticity and firmness, follow with a dropperful of <strong>Repair and Reverse Daily Serum</strong>. For optimal results, use this skin-revitalizing formula morning and night — applying it in an upward circular motion on your face and neck.',
  },
  {
    stepNumber: 4,
    imageSrc: '/images/bhmd/suggested-use/step-4.webp',
    imageAlt: 'Step 4',
    headingHtml: '<strong>Step 4:</strong>',
    bodyHtml:
      'Now it’s time to lock in that movie star glow! Apply a quarter-sized amount of <strong>Deep Regenerating Stem Cell Moisturizer</strong> on your face, neck, and chest, taking care to finish with your favorite mineral SPF.',
  },
  {
    stepNumber: 5,
    imageSrc: '/images/bhmd/suggested-use/step-5.webp',
    imageAlt: 'Step 5',
    headingHtml: '<strong>Step 5:</strong>',
    bodyHtml:
      'Finally, round out your routine with <strong>Dermal Repair Complex</strong>, our top-selling supplement designed to help skin look firm, lifted, and radiant from head to toe. Take 2 capsules daily with water and a meal, or as directed by your healthcare provider.',
  },
];

@Component({
  selector: 'app-bhmd-suggested-use',
  standalone: true,
  templateUrl: './bhmd-suggested-use.html',
  styleUrl: './bhmd-suggested-use.css',
})
export class BhmdSuggestedUseComponent {
  steps = STEPS;
}
