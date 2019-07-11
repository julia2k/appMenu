import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Input} from '@angular/core';
 

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() courseNames:object;
  @Input() dishName:object;
  
  constructor() { }
  chooseCourseDish(dish:object){
    this.dishName=dish;
  }
  ngOnInit() {
    
    console.log("from course   :  "+ this.courseNames);
  }

}
