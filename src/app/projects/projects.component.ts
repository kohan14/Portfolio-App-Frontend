import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
//"../../assets/progress.png"
  projectList:any[] = [ {
    "ProjectName" : "NAME",
    "ProjectDate" : "DATE",
    "ProjectTechnologies" : "TECHNOLOGIES",
    "ProjectDescription" : "Soon there will be more projects."
  },
  {
    "ProjectName" : "NAME",
    "ProjectDate" : "DATE",
    "ProjectTechnologies" : "TECHNOLOGIES",
    "ProjectDescription" : "Soon there will be more projects."
  },
  {
    "ProjectName" : "NAME",
    "ProjectDate" : "DATE",
    "ProjectTechnologies" : "TECHNOLOGIES",
    "ProjectDescription" : "Soon there will be more projects."
  },
  {
    "ProjectName" : "NAME",
    "ProjectDate" : "DATE",
    "ProjectTechnologies" : "TECHNOLOGIES",
    "ProjectDescription" : "Soon there will be more projects."
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