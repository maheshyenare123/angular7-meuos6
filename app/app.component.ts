import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 7';
  servers = [
    { name: 'server 1', content: 'just server', type: 'server' },
    { name: 'server 2', content: 'just blueprint', type: 'blueprint' },
  ];

  onServerAdded(data) {
    this.servers.push({
      name: data.name,
      content: data.content,
      type: data.type,
    });
  }

  onBlueprintAdded(data) {
    this.servers.push({
      name: data.name,
      content: data.content,
      type: data.type,
    });
  }

  onFirstChange() {
    this.servers[0].name = 'Changed!';
  }
}
