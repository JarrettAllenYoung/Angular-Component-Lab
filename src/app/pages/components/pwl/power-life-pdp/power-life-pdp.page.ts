import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PwlProductDetailComponent } from '../../../../components/pwl/pwl-product-detail/pwl-product-detail';

@Component({
  selector: 'app-pwl-pdp-page',
  standalone: true,
  imports: [RouterLink, PwlProductDetailComponent],
  templateUrl: './power-life-pdp.page.html',
})
export class PowerLifePdpPageComponent {}
