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

  public get getTheme() {
    return localStorage.getItem('theme') ?? 'light';
  }

  enableDarkMode() {
    this.renderer.addClass(document.body, 'dark');
  }

  disableDarkMode() {
    this.renderer.removeClass(document.body, 'dark');
  }
}