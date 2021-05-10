import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  private _visible = false;

  @Input()
  public zIndex = 0;

  public get visible(): boolean {
    return this._visible;
  }

  @Input()
  public set visible(v: boolean) {
    this._visible = v;
  }

  @Output()
  public visibleChange = new EventEmitter<boolean>();
}
