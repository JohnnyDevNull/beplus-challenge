import {Injectable} from '@angular/core';

function _window(): Window {
  return window ? window : {
    document: {},
    localStorage: {},
    sessionStorage: {}
  } as Window;
}

@Injectable({ providedIn: 'root' })
export class WindowRefService {
  private readonly window: Window | null = null;

  public constructor() {
    this.window = _window() as Window;
  }

  public nativeWindow(): Window {
    return this.window as Window;
  }

  public nativeDocument(): Document | null {
    return this.window?.document || null;
  }
}
