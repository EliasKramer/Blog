import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.scss']
})
export class ImageLinkComponent {
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @Input() link: string;  
}
