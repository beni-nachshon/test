import { Component, OnInit } from '@angular/core';
import { GlassesService } from '../glasses.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
color:any;
lens:any;
left :any;
right :any;
RightCylinder:any;
leftCylinder:any;

  constructor(private glassesService :GlassesService) {
    this.color=this.glassesService.color;
    this.lens=this.glassesService.lens;
    this.left=this.glassesService.left;
  this.right=this.glassesService.right;
  this.RightCylinder=this.glassesService.RightCylinder;
  this.leftCylinder=this.glassesService.leftCylinder;
   }

  ngOnInit(): void {
  }

 
}
