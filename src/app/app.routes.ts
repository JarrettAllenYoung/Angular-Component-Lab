import { Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components';
import { ProductCarouselDemoComponent } from './pages/components/product-carousel/product-carousel.page';
import { AccordionPageComponent } from './pages/components/accordion/accordion.page';
import { MarqueePageComponent } from './pages/components/marquee/marquee.page';
import { PopupPageComponent } from './pages/components/popup/popup.page';
import { MenuPage } from './pages/components/menu/menu.page';
import { CssAccordionPage } from './pages/components/css-accordion/css-accordion.page';
import { RadioGroupPage } from './pages/components/radio-group/radio-group.page';
import { MultiStepQuizPageComponent } from './pages/components/multi-step-quiz/multi-step-quiz.page';
import { ProductGalleryPageComponent } from './pages/components/product-gallery/product-gallery.page';

export const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/product-carousel', component: ProductCarouselDemoComponent },
  { path: 'components/accordion', component: AccordionPageComponent },
  { path: 'components/marquee', component: MarqueePageComponent },
  { path: 'components/popup', component: PopupPageComponent },
  { path: 'components/menu', component: MenuPage },
  { path: 'components/css-accordion', component: CssAccordionPage },
  { path: 'components/radio-group', component: RadioGroupPage },
  { path: 'components/multi-step-quiz', component: MultiStepQuizPageComponent, },
  { path: 'components/product-gallery', component: ProductGalleryPageComponent, },
];
