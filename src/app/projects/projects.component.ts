import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList:any[] = [ {
    "ProjectName" : "BLANK",
    "ProjectDate" : "99/55/2020",
    "ProjectTechnologies" : "Angular10, ASP.NET",
    "ProjectDescription" : "This project is about blahbl ahb lahbla hblah bla hblahb lahb lahbla hblahbl ahbla sdads  sda dsad  sda d sd as d ss d d d a s   s   sssda"
  },
  {
    "ProjectName" : "BLANK",
    "ProjectDate" : "99/55/2020",
    "ProjectTechnologies" : "Angular10, ASP.NET",
    "ProjectDescription" : "This project is about blahblahblahblahblah"
  },
  {
    "ProjectName" : "BLANK",
    "ProjectDate" : "99/55/2020",
    "ProjectTechnologies" : "Angular10, ASP.NET",
    "ProjectDescription" : "This project is about blahblahblahblahblah"
  },
  {
    "ProjectName" : "BLANK",
    "ProjectDate" : "99/55/2020",
    "ProjectTechnologies" : "Angular10, ASP.NET",
    "ProjectDescription" : "This project is about blahblahblahblahblah"
  }
]
  constructor() {
   }


  ngOnInit(): void {
  }
  projectListCheck(): boolean {
  return this.projectList.length > 2;
  }

}