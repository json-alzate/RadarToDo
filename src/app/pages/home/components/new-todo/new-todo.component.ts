import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  closeModal() {
    this.close.emit();
    console.log('close');
  }

}
