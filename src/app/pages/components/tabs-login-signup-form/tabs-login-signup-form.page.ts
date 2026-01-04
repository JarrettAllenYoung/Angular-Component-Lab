import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabsLoginSignupFormComponent } from '../../../components/tabs-login-signup-form/tabs-login-signup-form.component';

@Component({
  standalone: true,
  imports: [RouterLink, TabsLoginSignupFormComponent],
  templateUrl: './tabs-login-signup-form.page.html',
  styleUrl: './tabs-login-signup-form.page.css',
})
export class TabsLoginSignupFormPageComponent {}
