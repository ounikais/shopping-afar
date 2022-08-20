import { Component, Input, OnInit } from '@angular/core';

export interface SlideItem {
	title: string
	imageURL: string
	description: string
	forwardURL?: string
	buttonText?: string
}


@Component({
  selector: 'app-bootstrap-carousel',
  templateUrl: './bootstrap-carousel.component.html',
  styleUrls: ['./bootstrap-carousel.component.scss']
})
export class BootstrapCarouselComponent implements OnInit {

  @Input() slides: SlideItem[] = []
	randomId = 'bsCarousel'

  constructor() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		for(var i = 0; i < 10; i++) {
			this.randomId += characters.charAt(Math.floor(Math.random() * characters.length))
		}
   }

  ngOnInit(): void {
  }

}
