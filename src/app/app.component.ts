import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private sw: SwUpdate) { }
  title = 'tr-pwa-project';

  ngOnInit(): void {
    if (this.sw.isEnabled) {
      this.sw.available.subscribe((event) => {
        console.log(event);
        if (confirm('Press a button!')) {
          window.location.reload();
        } else {
          console.log('cancel');
        }
      });
    }
  }
}
