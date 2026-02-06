import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AcyProductDetailComponent } from '../../../../components/acy/acy-product-detail/acy-product-detail';

@Component({
  selector: 'app-acy-pdp-page',
  standalone: true,
  imports: [RouterLink, AcyProductDetailComponent],
  templateUrl: './acy-pdp.page.html',
})
export class AcyPdpPageComponent {}
