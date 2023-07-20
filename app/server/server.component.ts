import { OnChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit
{
  @Input() element: any;
  @Input() name: any;
  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAtfterContentInit called!');
  }
}
