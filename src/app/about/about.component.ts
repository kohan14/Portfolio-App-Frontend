import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  inViewport :boolean = false;

  ngOnInit(): void {
  }

  downloadCv() {
    this.dataService.downloadCv().subscribe(
      success => saveAs(success,"Piotr_Kochanowski_CV.pdf"),
      error => console.log("error",error)
    )
  }

}
