import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'k-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // posts = [
  //   { title: "first post", content: "this is the content"},
  //   { title: "second post", content: "this is the content"},
  //   { title: "third post", content: "this is the content"}
  // ]

  @Input() posts = [];

}
