// theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * @summary get current theme of the application
   * @description get current theme from local storage or check system theme
   */
  public get getTheme() {
    return localStorage.getItem('theme') ?? document.body.classList.contains('dark') ? 'dark' : 'light';
  }

  /**
   * @summary check the system theme and enable dark mode if the system theme is set to dark
   */
  checkSystemTheme(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.enableDarkMode();
    }
  }

  /**
   * @summary enable dark mode for the application
   */
  enableDarkMode() {
    this.renderer.addClass(document.body, 'dark');
  }

  /**
   * @summary disable dark mode for the application (Enable light mode)
   */
  disableDarkMode() {
    this.renderer.removeClass(document.body, 'dark');
  }
}