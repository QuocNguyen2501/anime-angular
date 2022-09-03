import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements AfterViewInit{
  readonly blockNumber =  Array(50).fill(1).map((x,i)=>i);

  constructor(){

  }

  ngAfterViewInit(): void {
    this.animatedBlocks();
    setInterval(this.animatedBlocks,4000);
  }


  private animatedBlocks(){
      anime({
      targets:'.block',
      translateX: function(){
        return anime.random(-700,700);
      },
      translateY: function(){
        return anime.random(-500,500);
      },
      scale: function(){
        return anime.random(1,5);
      },
      easing: 'linear',
      duration: 3000,
      delay: anime.stagger(10),
    });
  }

}
