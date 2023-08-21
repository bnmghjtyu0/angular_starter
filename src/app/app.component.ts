import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/** 根元件 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
