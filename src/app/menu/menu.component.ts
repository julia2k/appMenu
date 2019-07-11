import { Component, OnInit } from '@angular/core';
import {  IMenu, CourseList } from "../IMenu";

// import { Observable } from 'rxjs';
 import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: IMenu[]=[];
  errorMessage:string;
  courseNames:object;
  dishName:object;

  constructor(private menuService: MenuService){

  }
  chooseMenuCourse(course){
      this.courseNames=course;
      this.dishName=course.courseList[0];
       
  }
  ngOnInit() :void {
  this.menuService.getMenu().subscribe(
    (menu)=>{
      this.menu = menu,
      this.courseNames =menu[0],
      this.dishName=this.menu[0].courseList[0];
    },
   error=>this.errorMessage=<any>error
  );
  
  //console.log(this.menu);
  }
  
  
  }
  

