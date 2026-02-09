import { Component } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { BhmdWhatsIncludedComponent } from '../bhmd-whats-included/bhmd-whats-included';
import { BhmdSuggestedUseComponent } from '../bhmd-suggested-use/bhmd-suggested-use';

export type BhmdAccordionItem = {
  id: string;
  title: string;
  body?: string;
  includedKey?: string;
  children?: BhmdAccordionItem[];
};

@Component({
  selector: 'app-bhmd-css-accordion',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, BhmdWhatsIncludedComponent, BhmdSuggestedUseComponent],
  templateUrl: './bhmd-css-accordion.component.html',
  styleUrls: ['./bhmd-css-accordion.component.scss'],
})
export class BhmdCssAccordionComponent {
  items: BhmdAccordionItem[] = [
    {
      id: 'faq-drawer-1',
      title: "WHAT'S INCLUDED",
      body: '',
      children: [
        {
          id: 'faq-drawer-1-1',
          title: 'Refresh + Renew Cleansing Gel™',
          includedKey: 'refresh_renew',
        },
        {
          id: 'faq-drawer-1-2',
          title: 'Moisture Lock Botanical Essence™',
          includedKey: 'moisture_lock_botanical_essence',
        },
        {
          id: 'faq-drawer-1-3',
          title: 'Repair + Reverse Daily Serum™',
          includedKey: 'repair_reverse_daily_serum',
        },
        {
          id: 'faq-drawer-1-4',
          title: 'Deep Regenerating Stem Cell Moisturizer™',
          includedKey: 'deep_regenerating_stem_cell_moisturizer',
        },
        {
          id: 'faq-drawer-1-5',
          title: 'Dermal Repair Complex™',
          includedKey: 'dermal_repair_complex',
        },
      ],

    },
    {
      id: 'faq-drawer-2',
      title: 'SUGGESTED USE',
      body: '',
    },
  ];
}
