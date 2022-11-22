var x = 50;
    var y = 300; 
    var diameter = 25;
    var xm = -5;
    var xd = 450;
    var mousex = 0;
    var mousey = 0;
   var yR = Math.floor(Math.random()*10);
    function setup() 
    {
      createCanvas(900, 900);
    }
function draw ()
{
    circle();
    controlcircle();
    
    ellipseo();

    triangletriangle();

    Squarerect();
    
   RandomEllipse();

    Boarders();

    Exit();


    
   
    mousesq();
    
    EndEvent();

  
    }
    function EndEvent()
    {
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
    function circle(x, y, diameter)
    {

    }
    function ellipseo()
    {
        d = color(300);
        fill(d);
        ellipse(xm, 30, 100, 50);
    
    }
    function controlcircle()
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
}
function mousesq()
{
    square (mousex, mousey,100);

}
   function triangletriangle()
   {
    triangle(xm,700, xd, 600, 600, 600);
    triangle(xd,xm,50, xd, 40, xm);
   }
   function Squarerect()
   {
    rect(xd,400,50,90);
    square(xm,100,100);
   }
   function RandomEllipse()
   {
    ellipse(xm,300, 40+yR,yR);
   }
   function Boarders()
   {
    D = color(20, 30, 198)
    fill (D)
    ellipse(900, 450, 20, 1000);
    ellipse(0, 450, 20, 1000);
    ellipse(450, 0, 1000, 20);
    ellipse(450, 900, 1000, 20);
   }
   function Exit()
   {
    c=color(200,12,12);
    fill(c);
    {
        square(800, 350, 100);
    }
   }
  function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    }






 










