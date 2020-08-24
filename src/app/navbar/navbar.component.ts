import { Component, OnInit, HostListener } from '@angular/core';
import { polyfill } from "smoothscroll-polyfill";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    polyfill();
  }
  hamburgerStatus: boolean = false;
  navbarStatus: boolean = false;
  ngOnInit(): void {

   }  
  @HostListener("document: scroll")
  scrollFunction(){
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
      this.navbarStatus = true;
    }
    else{
      this.navbarStatus = false;
    }
  }
  scrollToMiddle(destination: string){
    
    document.getElementById(destination).scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"});
    this.hamburgerStatus = false;
  }
  scrollTo(destination: string){
    let viewport = window.innerWidth;
    if(viewport < 720)
      {
        document.getElementById(destination).scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
        this.hamburgerStatus = false;
      } 
    else
     {
      document.getElementById(destination).scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"});
      this.hamburgerStatus = false;
     }
  }

}
