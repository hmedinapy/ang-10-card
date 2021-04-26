import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class AppComponent {
  title = 'angular-card-view';
  gridColumns = 4;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 4 ? 5 : 4;
  }
}
