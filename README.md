# AnimeAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
Thanks to [Online Tutorials](https://www.youtube.com/c/OnlineTutorials4Designers) , after I watched their [tutorial](https://www.youtube.com/watch?v=XMhHEVznWEY) and I would like make a similar one with angular 14 and tried using a simple standalone component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Install AnimeJS to Angular project
To install and use AnimeJS in an Angular project, we need to install some packages:
```
npm install animejs --save
npm install @types/animejs --save-dev
```
Now we could use animejs in our application by importing
```
import anime from 'animejs';
...
ngAfterViewInit(): void{
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
```
Anime functionality only works in ngAfterViewInit() 

## Screenshot
![Screenshot](https://github.com/QuocNguyen2501/anime-angular/tree/master/src/assets/screenshot.png)