import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TabKey = 'signup' | 'login';

@Component({
  selector: 'app-tabs-login-signup-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabs-login-signup-form.component.html',
  styleUrl: './tabs-login-signup-form.component.css',
})
export class TabsLoginSignupFormComponent {
  activeTab: TabKey = 'login';

  // Simple local state for the demo (no real submit)
  signup = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  login = {
    email: '',
    password: '',
  };

  // Track focus so labels can "highlight" like the jQuery version
  private focused: Record<string, boolean> = {};

  setTab(tab: TabKey) {
    this.activeTab = tab;
  }

  isActive(tab: TabKey) {
    return this.activeTab === tab;
  }

  onFocus(key: string) {
    this.focused[key] = true;
  }

  onBlur(key: string) {
    this.focused[key] = false;
  }

  isFocused(key: string) {
    return !!this.focused[key];
  }

  hasValue(value: unknown) {
    return String(value ?? '').trim().length > 0;
  }

  labelActive(key: string, value: unknown) {
    // matches: "move label up when focused OR has value"
    return this.isFocused(key) || this.hasValue(value);
  }

  labelHighlight(key: string, value: unknown) {
    // matches: "highlight label on focus or when it has value + focused"
    return this.isFocused(key) && this.hasValue(value);
  }

  preventSubmit(e: Event) {
    e.preventDefault();
  }
}
