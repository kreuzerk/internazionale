import { Component } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent {
  title = $localize`:@@foo.title:Real Madrid is the best team in the world`;
}
