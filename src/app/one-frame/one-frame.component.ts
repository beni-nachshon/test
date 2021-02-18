import { Component, Input, OnInit } from '@angular/core';
import { GlassesService } from '../glasses.service';

@Component({
  selector: 'app-one-frame',
  templateUrl: './one-frame.component.html',
  styleUrls: ['./one-frame.component.css']
})
export class OneFrameComponent implements OnInit {
@Input () color : any;
  constructor(private glassesService :GlassesService) { }

  ngOnInit(): void {
  }
add(){
this.glassesService.color=this.color;
}
}
