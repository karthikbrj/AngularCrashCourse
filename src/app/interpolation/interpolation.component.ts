import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  template: `<div>welcome {{this.name}}
<h1>{{this.name.toUpperCase()}}</h1>
</div>`,
  styles: []
})
export class InterpolationComponent{

public name:String="karthik";

}
