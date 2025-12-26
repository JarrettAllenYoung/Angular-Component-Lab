import { Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components';
import { CarouselDemoComponent } from './pages/carousel-demo/carousel-demo';
import { AccordionPageComponent } from './pages/components/accordion/accordion.page';

export const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/carousel', component: CarouselDemoComponent },
  { path: 'components/accordion', component: AccordionPageComponent },
];
