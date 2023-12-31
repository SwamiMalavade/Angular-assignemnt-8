import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() public Emmiter = new EventEmitter();
  public demo(value: any) {
    this.Emmiter.emit(value);
  }
}
