import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'davide grillo';

  onButtonClick = () => {

    if (this.title == "davide grillo")
      this.title = "crickus niggus";
    else this.title = "davide grillo";
  };
}
