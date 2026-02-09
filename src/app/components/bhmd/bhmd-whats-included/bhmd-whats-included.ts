import { Component, Input } from '@angular/core';

export type BhmdIncludedIcon = {
  imgSrc: string;
  label: string;
  imgAlt?: string;
};

export type BhmdIncludedItem = {
  slug: string;
  title: string;
  ratingScore: number;
  reviewsCountLabel: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icons: BhmdIncludedIcon[];
};

const INCLUDED: Record<string, BhmdIncludedItem> = {
  refresh_renew: {
    slug: 'refresh_renew',
    title: 'Refresh + Renew Cleansing Gel™',
    ratingScore: 4.7,
    reviewsCountLabel: '(109 Reviews)',
    description:
      '<strong>Refresh + Renew</strong> is the combination of our ultimate dream ingredients for formulating the perfect “glowing skin” cleanser. By combining the power of specialized “beauty probiotics,” long-lasting hydrators, active Vitamin B3, natural ultra-brightening extracts, and non-ionic deep cleansers, we created a best-in-class cleanser that helps optimize skin’s youth potential.*',
    imageSrc: 'images/bhmd/BHMD_RefreshRenewCleansingGel_thumb.webp',
    imageAlt: 'Refresh + Renew Cleansing Gel',
    icons: [
      {
        imgSrc: 'images/bhmd/icons/radiant.webp',
        label: 'Radiant',
        imgAlt: 'Radiant icon',
      },
      {
        imgSrc: 'images/bhmd/icons/correcting.webp',
        label: 'Correcting',
        imgAlt: 'Correcting icon',
      },
      {
        imgSrc: 'images/bhmd/icons/hydrating.webp',
        label: 'Hydrating',
        imgAlt: 'Hydrating icon',
      },
    ],
  },

  moisture_lock_botanical_essence: {
    slug: 'moisture_lock_botanical_essence',
    title: 'Moisture Lock Botanical Essence™',
    ratingScore: 4.7,
    reviewsCountLabel: '(823 Reviews)',
    description: 'This lightweight beauty essence combines nourishing botanical extracts with new-age skincare technology — helping support healthy barrier function and give skin a luminous, healthy glow. Each drop is enriched with a first-of-its-kind blend of hydrating agents, firming collagen-support compounds, and skin-brightening ferments to help address the unique challenges of aging skin — for significantly tighter, smoother, younger-looking skin.*',
    imageSrc: 'images/bhmd/BHMD_MoistureLockBotanicalEssence_thumb.webp',
    imageAlt: 'Moisture Lock Botanical Essence',
    icons: [
      {
        imgSrc: 'images/bhmd/icons/lifting.webp',
        label: 'Lifting',
        imgAlt: 'Lifting icon',
      },
      {
        imgSrc: 'images/bhmd/icons/tightening.webp',
        label: 'Tightening',
        imgAlt: 'Tightening icon',
      },
      {
        imgSrc: 'images/bhmd/icons/smoothing.webp',
        label: 'Smoothing',
        imgAlt: 'Smoothing icon',
      },
    ],
  },

  repair_reverse_daily_serum: {
    slug: 'repair_reverse_daily_serum',
    title: 'Repair + Reverse Daily Serum™',
    ratingScore: 4.7,
    reviewsCountLabel: '(65 Reviews)',
    description: 'If you’ve noticed your skin starting to wilt, crease, and turn sallow as you get older — these are all signs of glycation, a biological aging process that occurs in all humans over time. Luckily, we found a way to help your skin defy the visible effects of aging, through a combination of advanced ingredients and the youth-preserving power of algae.*',
    imageSrc: 'images/bhmd/BHMD_RepairsReverseDailySerum_thumb.webp',
    imageAlt: 'Repair + Reverse Daily Serum',
    icons: [
      {
        imgSrc: 'images/bhmd/icons/tightening.webp',
        label: 'Tightening',
        imgAlt: 'Tightening icon',
      },
      {
        imgSrc: 'images/bhmd/icons/radiant.webp',
        label: 'Radiant',
        imgAlt: 'Radiant icon',
      },
      {
        imgSrc: 'images/bhmd/icons/smoothing.webp',
        label: 'Smoothing',
        imgAlt: 'Smoothing icon',
      },
    ],
  },

  deep_regenerating_stem_cell_moisturizer: {
    slug: 'deep_regenerating_stem_cell_moisturizer',
    title: 'Deep Regenerating Stem Cell Moisturizer™',
    ratingScore: 4.7,
    reviewsCountLabel: '(109 Reviews)',
    description:
      'Beverly Hills MD <strong>Deep Regenerating Stem Cell Moisturizer</strong> contains a deep-acting formula that helps reenergize aging skin cells — to give your skin a stunningly smooth texture, pristine tone, and a “movie star” glow. It’s a true breakthrough in plant stem-cell technology, and the results are probably going to make your friends jealous!',
    imageSrc: 'images/bhmd/BHMD_DeepRegeneratingStemCellMoisturizer_thumb.webp',
    imageAlt: 'Deep Regenerating Stem Cell Moisturizer',
    icons: [
      {
        imgSrc: 'images/bhmd/icons/hydrating.webp',
        label: 'Hydrating',
        imgAlt: 'Hydrating icon',
      },
      {
        imgSrc: 'images/bhmd/icons/smoothing.webp',
        label: 'Smoothing',
        imgAlt: 'Smoothing icon',
      },
      {
        imgSrc: 'images/bhmd/icons/radiant.webp',
        label: 'Radiant',
        imgAlt: 'Radiant icon',
      },
    ],
  },

  dermal_repair_complex: {
    slug: 'dermal_repair_complex',
    title: 'Dermal Repair Complex™',
    ratingScore: 4.7,
    reviewsCountLabel: '(109 Reviews)',
    description:
      '<strong>Dermal Repair Complex</strong> is a dietary supplement that works to revitalize skin from the inside out. Formulated using a blend of scientifically-backed nutrients, <strong>Dermal Repair Complex</strong> helps combat the key causes of dermal breakdown — resulting in visibly firmer and more lifted skin, reduced wrinkles, enhanced radiance, and a significantly younger, healthier overall appearance.†*',
    imageSrc: 'images/bhmd/BHMD_DermalRepairComplex_thumb.webp',
    imageAlt: 'Dermal Repair Complex',
    icons: [
      {
        imgSrc: 'images/bhmd/icons/lifting.webp',
        label: 'Lifting',
        imgAlt: 'Lifting icon',
      },
      {
        imgSrc: 'images/bhmd/icons/smoothing.webp',
        label: 'Smoothing',
        imgAlt: 'Smoothing icon',
      },
      {
        imgSrc: 'images/bhmd/icons/enhancing.webp',
        label: 'Enhancing',
        imgAlt: 'Enhancing icon',
      },
    ],
  },
};

@Component({
  selector: 'app-bhmd-whats-included',
  standalone: true,
  templateUrl: './bhmd-whats-included.html',
  styleUrl: './bhmd-whats-included.css',
})
export class BhmdWhatsIncludedComponent {
  @Input({ required: true }) slug!: string;

  get data(): BhmdIncludedItem {
    return INCLUDED[this.slug] ?? INCLUDED['refresh_renew'];
  }

  onReviewsClick(e: Event) {
    e.preventDefault();
  }
}
