 var x = 50;
    var y = 300; 
    var diameter = 25;
    var xm = -5;
    var xd = 450;
    var mousex = 0;
    var mousey = 0;
   
    function setup() 
    {
      createCanvas(900, 900);
    }
function draw ()
{
    circle(x, y, diameter);
    
    if (x >= 900) 
    {
      x = 50;
    }
    else if (x<=0)
    {
      x = 890;
    }

    if (keyIsDown(83)) 
    {
      y += 10;
    } 
    else if (keyIsDown(87)) 
    {
      y -= 10;
    }

    if (keyIsDown(68)) 
    {
      x += 10;
    } 
    else if (keyIsDown(65)) 
    {
      x -= 10;
    }

    if (y >= 900) 
    {
      y = 50;
    }
    else if (y<=0)
    {
      y= 850;
    }

    if (diameter < 40) 
    {
      diameter += 3;
    } 
    else if (diameter >= 200) 
    {
      diameter = 25;
    }
    d = color(300);
    fill(d);
    ellipse(xm, 30, 100, 50);
    rect(xd,400,50,90);
    ellipse(xm,200,40,90);
    triangle(xm,700, xd, 600, 600, 600);
    square(xm,100,100);
    triangle(xd,xm,50, xd, 40, xm);
    square (mousex, mousey,100);
    c=color(200,12,12);
    fill(c);
    {
        square(800, 350, 100);
    }
    if (xm>=900)
    {
      xm = 0;
    }
    else if (xm<=900)
    {
       xm+=3;
    } 
    if (xd >= 900)
    {
      xd=50;
    }
    else if (xd <= 900)
    {
      xd+=1;
    } 
    if (x>=800 && x<=900 && y>=350 && y<=450)
  {
    window.alert("Winner of the game, is you!");
  }
  
    }
    
  
   
  function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    }






 

