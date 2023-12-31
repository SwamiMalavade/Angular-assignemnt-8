import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() public Emmiter = new EventEmitter();
  @Input() public value: any;

  public str: string = 'Hello from Child';
  public demo() {
    this.Emmiter.emit(this.str);
  }
}
