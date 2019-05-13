import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  	<h2>Welcome {{name}}</h2>
  	<h2>{{2+5}}</h2>
  	<h2>{{name.length}}</h2>
  	<h2>{{name.toUpperCase()}}</h2>
  	<h2>{{greetUser()}}</h2>
  	<h2>{{siteUrl}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "thuraaung";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
  	return "Hello" + this.name;
  }
}
