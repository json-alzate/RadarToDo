import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navController.back();
  }

}
