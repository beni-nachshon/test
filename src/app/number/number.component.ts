import { Component, OnInit } from '@angular/core';
import { GlassesService } from '../glasses.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  left :any;
  right :any;
  RightCylinder:any;
  leftCylinder:any;
 
  constructor(private glassesService :GlassesService) { }

  ngOnInit(): void {
  }
  add(){
    this.glassesService.left=this.left;
    this.glassesService.right=this.right;
    this.glassesService.RightCylinder=this.RightCylinder;
    this.glassesService.leftCylinder=this.leftCylinder;
    }
}
