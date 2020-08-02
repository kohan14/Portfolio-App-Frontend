import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioApp';

  inViewport : boolean = false;
  
  @HostListener("document : scroll")
  onScrollReveal(divClass : string) {
    var div = document.querySelector('.about-container');
    var bounding = div.getBoundingClientRect();
    console.log(bounding)
    if(bounding.top >= 0 
      && bounding.bottom <=(window.innerHeight || document.documentElement.clientHeight))
    {
      console.log("in viewport")
      this.inViewport = true;
    }
    else
    {
      console.log("Not in viewport")
      this.inViewport = false;
    }
  }
}

