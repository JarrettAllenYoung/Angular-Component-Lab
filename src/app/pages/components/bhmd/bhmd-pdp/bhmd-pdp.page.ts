import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BhmdProductDetailComponent } from '../../../../components/bhmd/bhmd-product-detail/bhmd-product-detail';

@Component({
  selector: 'app-bhmd-pdp-page',
  standalone: true,
  imports: [RouterLink, BhmdProductDetailComponent],
  templateUrl: './bhmd-pdp.page.html',
})
export class BhmdPdpPageComponent {}
