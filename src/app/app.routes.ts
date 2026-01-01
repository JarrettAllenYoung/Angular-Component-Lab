import { Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components';
import { CarouselDemoComponent } from './pages/components/carousel/carousel.page';
import { AccordionPageComponent } from './pages/components/accordion/accordion.page';
import { MarqueePageComponent } from './pages/components/marquee/marquee.page';
import { PopupPageComponent } from './pages/components/popup/popup.page';

export const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/carousel', component: CarouselDemoComponent },
  { path: 'components/accordion', component: AccordionPageComponent },
  { path: 'components/marquee', component: MarqueePageComponent },
  { path: 'components/popup', component: PopupPageComponent },
];
