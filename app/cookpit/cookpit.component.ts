import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css'],
})
export class CookpitComponent implements OnInit {
  name: string = '';
  content: string = '';

  @ViewChild('contentInput') contentInput: ElementRef;

  @Output() serverAdded = new EventEmitter();
  @Output() blueprintAdded = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput) {
    this.serverAdded.emit({
      name: nameInput.value,
      content: this.contentInput.nativeElement.value,
      type: 'server',
    });
  }

  onAddBlueprint(nameInput) {
    this.blueprintAdded.emit({
      name: nameInput.value,
      content: this.contentInput.nativeElement.value,
      type: 'blueprint',
    });
  }
}
