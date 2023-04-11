import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { interval, Subscription } from 'rxjs';

export const fade = [
  trigger('fade', [
    state('in', style({ 'opacity': '1' })),
    state('out', style({ 'opacity': '0' })),
    transition('* <=> *', [
      animate(1000)
    ])
  ])
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  state = 'in';
  subscription: Subscription;

  img = "https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  currentIndex = 0;

  imgs = [
    "https://images.unsplash.com/photo-1633310888626-b60d9615a900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80",
    "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  ]

  constructor() { }

  ngOnInit(): void {
    const source = interval(3000);
    this.subscription = source.subscribe(val => {
      if (this.currentIndex == 3) {
        this.currentIndex = 0
        this.img = this.imgs[0]
      } else {
        this.currentIndex = this.currentIndex + 1;
        this.img = this.imgs[this.currentIndex + 1];
      }
    });
  }

}
