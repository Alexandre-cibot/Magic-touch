/**
 * Created by Alexandre on 22/06/2016.
 */

$(document).keypress(function(e){
    var bg = false;
    var canvas = false;
    var touche = e.keyCode;
    var display = document.querySelector('#display');
    var animation = document.createElement('DIV');
    animation.classList.add("animated");
    var animation2 = document.createElement('DIV'); // Il faut ajouter la class 'exist' a l'animation2 si on s'en sert.s
    animation2.classList.add('animated');

    var son;

    switch(touche){
        case 97://a
            son = new Audio("sounds/bubbles.mp3");
            animation.classList.add('square-2');
            animation.classList.add('rotateIn');
            break;
        case 98://b
            son = new Audio("sounds/clay.mp3");
            animation.classList.add('circle');
            animation.classList.add('zoomIn');
            break;
        case 99://c
            son = new Audio("sounds/confetti.mp3");
            animation.classList.add('bg-pink');
            animation.classList.add('bg');
            bg = true;
            break;
        case 100://d
            son = new Audio("sounds/corona.mp3");
            animation.classList.add('square-3');
            animation.classList.add('wobble');
            break;
        case 101://e
            son = new Audio("sounds/dotted-spiral.mp3");
            animation.classList.add('line-2');
            animation.classList.add('rotateIn');
            break;
        case 102://f
            son = new Audio("sounds/flash-1.mp3");
            animation.classList.add('line');
            animation.classList.add('rotateIn');
            break;
        case 103://g
            son = new Audio("sounds/flash-2.mp3");
            animation.classList.add('rectangle');
            animation.classList.add('zoomOut');

            break;
        case 104://h
            son = new Audio("sounds/flash-3.mp3");
            animation.classList.add('bg-purple');
            animation.classList.add('bg');
            bg = true;
            break;
        case 105://i
            son = new Audio("sounds/glimmer.mp3");
            animation.classList.add('bg-orange');
            animation.classList.add('bg');
            bg = true;
            break;
        case 106://j
            son = new Audio("sounds/moon.mp3");
            animation.classList.add('semi-circle-1');
            animation.classList.add('slideInDown');

            animation2.classList.add('exist');
            animation2.classList.add('slideInUp');
            animation2.classList.add('semi-circle-2');
            break;
        case 107://k
            son = new Audio("sounds/pinwheel.mp3");
            animation.classList.add('circle-2');
            animation.classList.add('zoomIn');
            break;
        case 108://l
            son = new Audio("sounds/piston-1.mp3");
            animation.classList.add('circle-4');
            animation.classList.add('bounceInLeft');

            animation2.classList.add('exist');
            animation2.classList.add('circle-5');
            animation2.classList.add('bounceInRight');
            break;
        case 109://m
            son = new Audio("sounds/piston-2.mp3");
            animation.classList.add('bg-red');
            animation.classList.add('bg');
            animation.classList.add('flash');
            bg = true;
            break;
        case 110://n
            son = new Audio("sounds/piston-3.mp3");
            animation.classList.add('circle-3');
            animation.classList.add('zoomOut');
            break;
        case 111://o
            son = new Audio("sounds/prism-1.mp3");
            animation.classList.add('triangle-3');
            animation.classList.add('rotateOutUpLeft');
            break;
        case 112://p
            son = new Audio("sounds/prism-2.mp3");
            animation.classList.add('circle-3');
            animation.classList.add('bounceInRight');
            break;
        case 113://q
            son = new Audio("sounds/prism-3.mp3");
            animation.classList.add('bg-purple');
            animation.classList.add('bg');
            animation.classList.add('flash');
            bg = true;
            break;
        case 114://r
            son = new Audio("sounds/splits.mp3");
            animation.classList.add('square-4');
            animation.classList.add('bounceInUp');
            //Deuxieme animation
            animation2.classList.add('exist');
            animation2.classList.add('square-4');
            animation2.classList.add('bounceInLeft');

            break;
        case 115://s
            son = new Audio("sounds/squiggle.mp3");
            animation.classList.add('square-4');
            animation.classList.add('bounceInDown');
            //Deuxieme animation
            animation2.classList.add('exist');
            animation2.classList.add('square-4');
            animation2.classList.add('bounceInRight');
            break;
        case 116://t
            son = new Audio("sounds/strike.mp3");
            canvas = true;
            break;
        case 117://u
            son = new Audio("sounds/suspension.mp3");
            animation.classList.add('circle');
            animation.classList.add('circle-6');
            animation.classList.add('bounceInDown');
            break;
        case 118://v
            son = new Audio("sounds/timer.mp3");
            animation.classList.add('triangle-4');
            animation.classList.add('rotateIn');
            break;
        case 119://w
            son = new Audio("sounds/ufo.mp3");
            break;
        case 120://x
            son = new Audio("sounds/veil.mp3");
            animation.classList.add('triangle-2');
            animation.classList.add('rollOut');
            break;
        case 121://y
            son = new Audio("sounds/wipe.mp3");
            animation.classList.add('triangle');
            animation.classList.add('bounceInDown');
            break;
        case 122://z
            son = new Audio("sounds/zig-zag.mp3");
            animation.classList.add('triangle');
            animation.classList.add('rollOut');
            break;
    }
    son.play();
    if(canvas == true){
        canvas_falling();
        window.setTimeout(function(){
            $('#canvas_falling').remove();
        },400);
    }
    else{
        display.appendChild(animation);
        if(animation2.classList.contains('exist')){
            display.appendChild(animation2);
            window.setTimeout(function(){
                console.log('normal');
                $("#display").find(":first-child").remove();
            }, 1500);
        }
        //On supprime les DIV dans le #display toute les 1.5 secondes.

        if(bg == false){
            window.setTimeout(function(){
                console.log('normal');
                $("#display").find(":first-child").remove();
            }, 1500);
        }
        else if(bg == true){
            window.setTimeout(function(){
                console.log('bg');
                $('.bg').remove();
            }, 400);
            bg = false;
        }
    }
});




/*
function spiral(){
    if(launch_autorisation == true){
        console.log('true');
        var MAX=20;
        var n=MAX;
        var div=$('<div/>');
        for(var i=0; i<n; ++i){
            var obj=$('<p/>').appendTo(div);
            var m=MAX;
            for(var i=0; i<m; ++i){
                obj=$('<span/>',{
                    text: ' _ _ '
                }).appendTo(obj);
            }
        }
        launch_autorisation = false;
        div.appendTo('#display');
        window.setTimeout(function(){
            launch_autorisation = true;
        },1000);
    }
};

*/



/* function => Particules qui tombent */
function canvas_falling(){
    var canvas_falling = document.createElement('CANVAS');
    document.querySelector('#display').appendChild(canvas_falling);
    canvas_falling.setAttribute("id", "canvas_falling");
    var ctx = canvas_falling.getContext('2d');
//Dimension du canvas
    var W = window.innerWidth,
        H = window.innerHeight;
    canvas_falling.width = W;
    canvas_falling.height = H;
    var particles = [];
    var x = 100;
    var y = 100;

    for (var i = 0; i < 100; i++) {
        //ajout des particules avec positions aléatoires
        particles.push(new creat_particle());
    }

//foction pour multiplier les particules
    function creat_particle() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;

        //Velocity
        this.vx = Math.random() * 20 - 1;
        this.vy = Math.random() * 20 + 1;

        //Couleurs aléatoires
        var r = Math.random() * 255 >> 0;
        var g = Math.random() * 255 >> 0;
        var b = Math.random() * 255 >> 0;
        this.color = "rgba(" + r + "," + g + "," + b + ",0.5)";

        //Taille aléatoires
        this.radius = Math.random() * 6 + 5;
    }
//Animation des particules
    function draw() {
        ctx.clearRect(0, 0, canvas_falling.width, canvas_falling.height);

        //Particls from array

        for (var t = 0; t < particles.length; t++) {

            var p = particles[t];

            ctx.beginPath();
            //couleurs des boules
            var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            gradient.addColorStop(1, p.color);
            gradient.addColorStop(1, "rgb(66, 66, 66)");

            ctx.fillStyle = gradient;
            ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false)

            ctx.fill();
            //velocity
            p.x += p.vx;
            p.y += p.vy;

            //boundaries
            if (p.x < -50) p.x = W + 50;
            if (p.y < -50) p.y = H + 50;
            if (p.x > W + 50) p.x = -50;
            if (p.y > H + 50) p.y = -50;
        }
    }
    setInterval(draw, 33);
}