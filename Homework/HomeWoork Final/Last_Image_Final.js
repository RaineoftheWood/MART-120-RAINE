var Dy=[];
var Dx= [];
var y=[];
var x=[];
var xm=[];
function setup() 
    {
      createCanvas(900, 900);
    }
    //Background 
    x[0]=100;
    y[0]=100;
    Dx[0]=800;
    Dy[0]=800;
    y[2]=200;
    //Sun Rays 
    x[1]=700;
    y[1]=245;
    Dx[1]=455;
    Dx[2]=300;
    Dx[3]= 150;
    Dx[4]= 60;
    //MOuntains 
    x[2]=-100;
    y[2]=700;
    x[3]=200;
    y[3]=200;
    x[4]=500;
    y[4]=700;
    x[5]=200;
    y[5]=700;
    x[6]=555;
    y[6]=190;
    x[7]=800;
    y[7]=700;
    x[8]=500;
    y[8]=700;
    x[9]=810;
    y[9]=230;
    x[10]=1000;
    y[10]=700;
    //Road 
    y[11]=690;
    //movement 
    xm[0]=30;
    xm[1]=45;
    xm[2]=36;
    function draw ()
    {
        C1=color(0, 10, 90);
        fill (C1);
        rect(x[0], y[0] ,Dx[0] ,Dy[0]);
        C4=color(0,100,500);
        fill (C4);
        rect(x[0], y[2] ,Dx[0] ,Dy[0]);
        C2=color(0,150,750);
        fill (C2); 
        rect(x[0], y[1] ,Dx[0] ,Dy[0]);
        C3=color(233, 0, 300);
        fill (C3);
        circle(x[1], y[1], Dx[1]);
        C5=color(600, 0, 300);
        fill (C5);
        circle(x[1], y[1], Dx[2]);
        C6=color(800, 60, 150);
        fill (C6);
        circle(x[1], y[1], Dx[3]);
        C7=color(450, 500, 30);
        fill (C7);
        circle(x[1], y[1], Dx[4]);
        C8=color(400, 200, 30);
        fill(C8);
        triangle(x[2],y[2],x[3],y[3],x[4],y[4])
        triangle(x[5],y[5],x[6],y[6],x[7], y[7]) 
        triangle(x[8], y[8], x[9], y[9],x[10],y[10])
        C9=color(40);
        fill(C9);
        rect(x[2],y[11],1300, 150 );
        fill(C6);
        ellipse(20, 85, 700, 100);
        C10=color(10,432,75);
        fill(C10);
        circle(30,880, 100);
        circle(100,880, 100);
        circle(170,880, 100);
        circle(230,880, 100);
        circle(290,880, 100);
        circle(360,880, 100);
        circle(420,880, 100);
        circle(450,880, 100);
        circle(500,880, 100);
        circle(570,880, 100);
        circle(630,880, 100);
        circle(700,880, 100);
        circle(730,880, 100);
        circle(790,880, 100);
        circle(830,880, 100);
        circle(900,880, 100);
        circle(910,880, 100);
        circle(700,850, 60);
        circle(730,8600, 75);
        fill(C8);
        rect(0,760,1200, 5);
        fill(C3);
        circle(xm[0],710,10);
        circle(xm[1],710,10);
        fill(C4)
        triangle(xm[0], 710, xm[1], 710, xm[2], 700)
    }
        function movement ()
        {
            if (xm[0]>=900)
        {
          xm[0] = 0;
        }
        else if (xm[0]<=900)
        {
           xm[0]+=3;
        } 
        }
       