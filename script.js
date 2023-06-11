
let t = function(p) {
    p.isRunning = true;

    let canvas;
  
    p.setup = function() {
      canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    }
  
    p.draw = function() {
      if (!p.isRunning) {
        return;
      }
      p.background('white');
  
      p.beginShape();
      p.fill('lightgrey');
      p.noStroke();
      p.vertex(0, 0 + p.mouseY);
      p.vertex(0 + p.mouseX, 0 + p.mouseY);
      p.vertex(0 + p.mouseX, p.windowHeight);
      p.vertex(0, p.windowHeight);
      p.endShape(p.CLOSE);
  
      p.beginShape();
      p.fill('grey');
      p.vertex(0, 0 + p.mouseY);
      p.vertex(-p.mouseX, 0);
      p.vertex(p.windowWidth, 0);
      p.vertex(0 + p.mouseX, 0 + p.mouseY);
      p.endShape(p.CLOSE);
  
      p.beginShape();
      p.fill('black');
      p.vertex(0 + p.mouseX, 0 + p.mouseY);
      p.vertex(p.windowWidth, 0);
      p.vertex(p.windowWidth, p.windowHeight);
      p.vertex(0 + p.mouseX, p.windowHeight);
      p.endShape(p.CLOSE);
    };
  
    p.keyPressed = function() {
      if (p.key === '1' || p.key === '2' || p.key === '3' || p.key === '4' || p.key === '5' ||
          p.key === '6' || p.key === '7' || p.key === '8' || p.key === '9' || p.key === '0' || 
          p.key === 'A' || p.key === 'B' || p.key === 'C' || p.key === 'D') {
        p.saveCanvas(canvas, 'hoofdstuk_' + p.key, 'jpg');
      }
    };
  };

// Wrap the p5.js sketch with IntersectionObserver
function initializeSketch() {
  const observer111 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.id === 'hoofdstuk1' && entry.isIntersecting) {
          hoofdstuk1.isRunning = true;
          console.log('hoofdstuk1 is running');
        } else {
          hoofdstuk1.isRunning = false;
          console.log('hoofdstuk1 is not running');
        }
      });
    },{
      rootMargin: '-100px'
  });
    const testElement = document.getElementById('hoofdstuk1');
    observer111.observe(testElement);
};


  
const hoofdstuk1 = new p5(t, 'hoofdstuk1');
  initializeSketch();

  

  let bm = function(v) {
    v.isRunning1 = true;


    v.setup = function () {
      v.createCanvas(v.windowWidth, v.windowHeight);
    }
    
    v.draw = function () {
      if (!v.isRunning1) {
        return;
      }
      v.background(240);
      
          v.beginShape();
          v.fill('#FCFCFF')
          v.vertex(0, 0);
          v.vertex(v.windowWidth/3+v.mouseX, 0);
          v.vertex(v.windowWidth/3+v.mouseX, v.windowHeight/2);
          v.vertex(0, v.windowHeight/4);
          v.noStroke();
          v.endShape(v.CLOSE)  
      
          v.beginShape();
          v.fill('#C6C8EE')
          v.vertex(v.windowWidth/3, 0+v.mouseY);
          v.vertex(v.windowWidth, 0+v.mouseY);
          v.vertex(v.windowWidth, v.windowHeight);
          v.vertex(v.windowWidth/3, v.windowHeight);
          v.noStroke();
          v.endShape(v.CLOSE)
      
          v.beginShape();
          v.fill('#BBB6DF')
          v.vertex(0, v.windowHeight/4);
          v.vertex(v.windowWidth/2-v.mouseX/2, v.windowHeight/2);
          v.vertex(v.windowWidth/2-v.mouseX/2, v.windowHeight);
          v.vertex(0, v.windowHeight);
          v.noStroke();
          v.endShape(v.CLOSE)
    }
    };
      
  // Wrap the p5.js sketch with IntersectionObserver
  function initializeSketch1() {
    const observer112 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.target.id === 'hoofdstuk2' && entry.isIntersecting) {
            hoofdstuk2.isRunning1 = true;
            console.log('hoofdstuk2 is running');
          } else {
            hoofdstuk2.isRunning1 = false;
            console.log('hoofdstuk2 is not running');
          }
        });
      },{
        rootMargin: '-100px'
    });
      const testElement1 = document.getElementById('hoofdstuk2');
      observer112.observe(testElement1);
  };
  
  
    
  const hoofdstuk2 = new p5(bm, 'hoofdstuk2');
  initializeSketch1();
  
  let q = function(y) {
    y.isRunning2 = true;


    y.setup = function () {
    y.createCanvas(y.windowWidth, y.windowHeight);
  }
  
  y.draw = function () {
    if (!y.isRunning2) {
      return;
    }
    y.background('black');
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-10, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-10, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-20, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-20, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-30, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-30, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-40, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-40, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-50, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-50, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 105+(y.mouseX/4), 105+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 100+(y.mouseX/4), 100+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 85+(y.mouseX/4), 85+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 80+(y.mouseX/4), 80+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 65+(y.mouseX/4), 65+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 60+(y.mouseX/4), 60+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 45+(y.mouseX/4), 45+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 40+(y.mouseX/4), 40+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 25+(y.mouseX/4), 25+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 20+(y.mouseX/4), 20+(y.mouseX/4));
    y.fill('white')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 6+(y.mouseX/4), 6+(y.mouseX/4));
    y.fill('black')
    y.ellipse(y.windowWidth/2, y.windowHeight/2-60, 1+(y.mouseX/4), 1+(y.mouseX/4));
  };
  };
  
  // Wrap the p5.js sketch with IntersectionObserver
  function initializeSketch2() {
    const observer113 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.target.id === 'hoofdstuk3' && entry.isIntersecting) {
            hoofdstuk3.isRunning2 = true;
            console.log('hoofdstuk3 is running');
          } else {
            hoofdstuk3.isRunning2 = false;
            console.log('hoofdstuk3 is not running');
          }
        });
      },{
        rootMargin: '-100px'
    });
      const testElement2 = document.getElementById('hoofdstuk3');
      observer113.observe(testElement2);
  };
  
  
    
  const hoofdstuk3 = new p5(q, 'hoofdstuk3');
  initializeSketch2();  

   


          let b = function(n) {
            n.isRunning3 = true;

            n.setup = function () {
              n.createCanvas(n.windowWidth, n.windowHeight);
              n.rectMode(n.CENTER);
            }
            
            n.draw = function () {
              if (!n.isRunning3) {
                return;
              }
              var x=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-15){
                  x=n.windowWidth/2+690/2-15;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+15){
                  x=n.windowWidth/2-690/2+15;
              } 
              var y=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-15){
                  y=n.windowHeight/2+690/2-15;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+15){
                  y=n.windowHeight/2-690/2+15;
              } 
              
                var x1=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-25){
                  x1=n.windowWidth/2+690/2-25;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+25){
                  x1=n.windowWidth/2-690/2+25;
              } 
              var y1=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-25){
                  y1=n.windowHeight/2+690/2-25;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+25){
                  y1=n.windowHeight/2-690/2+25;
              }
              
                  var x2=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-35){
                  x2=n.windowWidth/2+690/2-35;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+35){
                  x2=n.windowWidth/2-690/2+35;
              } 
              var y2=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-35){
                  y2=n.windowHeight/2+690/2-35;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+35){
                  y2=n.windowHeight/2-690/2+35;
              }
              
                    var x3=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-45){
                  x3=n.windowWidth/2+690/2-45;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+45){
                  x3=n.windowWidth/2-690/2+45;
              } 
              var y3=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-45){
                  y3=n.windowHeight/2+690/2-45;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+45){
                  y3=n.windowHeight/2-690/2+45;
              }
              
                    var x4=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-55){
                  x4=n.windowWidth/2+690/2-55;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+55){
                  x4=n.windowWidth/2-690/2+55;
              } 
              var y4=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-55){
                  y4=n.windowHeight/2+690/2-55;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+55){
                  y4=n.windowHeight/2-690/2+55;
              }
              
                    var x5=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-65){
                  x5=n.windowWidth/2+690/2-65;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+65){
                  x5=n.windowWidth/2-690/2+65;
              } 
              var y5=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-65){
                  y5=n.windowHeight/2+690/2-65;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+65){
                  y5=n.windowHeight/2-690/2+65;
              }
              
                    var x6=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-75){
                  x6=n.windowWidth/2+690/2-75;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+75){
                  x6=n.windowWidth/2-690/2+75;
              } 
              var y6=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-75){
                  y6=n.windowHeight/2+690/2-75;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+75){
                  y6=n.windowHeight/2-690/2+75;
              }
              
                    var x7=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-85){
                  x7=n.windowWidth/2+690/2-85;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+85){
                  x7=n.windowWidth/2-690/2+85;
              } 
              var y7=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-85){
                  y7=n.windowHeight/2+690/2-85;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+85){
                  y7=n.windowHeight/2-690/2+85;
              }
              
                    var x8=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-95){
                  x8=n.windowWidth/2+690/2-95;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+95){
                  x8=n.windowWidth/2-690/2+95;
              } 
              var y8=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-95){
                  y8=n.windowHeight/2+690/2-95;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+95){
                  y8=n.windowHeight/2-690/2+95;
              }
              
                    var x9=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-105){
                  x9=n.windowWidth/2+690/2-105;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+105){
                  x9=n.windowWidth/2-690/2+105;
              } 
              var y9=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-105){
                  y9=n.windowHeight/2+690/2-105;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+105){
                  y9=n.windowHeight/2-690/2+105;
              }
              
                    var x10=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-115){
                  x10=n.windowWidth/2+690/2-115;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+115){
                  x10=n.windowWidth/2-690/2+115;
              } 
              var y10=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-115){
                  y10=n.windowHeight/2+690/2-115;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+115){
                  y10=n.windowHeight/2-690/2+115;
              }
              
                      var x11=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-125){
                  x11=n.windowWidth/2+690/2-125;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+125){
                  x11=n.windowWidth/2-690/2+125;
              } 
              var y11=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-125){
                  y11=n.windowHeight/2+690/2-125;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+125){
                  y11=n.windowHeight/2-690/2+125;
              }
              
                      var x12 =n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-135){
                  x12=n.windowWidth/2+690/2-135;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+135){
                  x12=n.windowWidth/2-690/2+135;
              } 
              var y12=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-135){
                  y12=n.windowHeight/2+690/2-135;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+135){
                  y12=n.windowHeight/2-690/2+135;
              }
              
                      var x13=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-145){
                  x13=n.windowWidth/2+690/2-145;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+145){
                  x13=n.windowWidth/2-690/2+145;
              } 
              var y13=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-145){
                  y13=n.windowHeight/2+690/2-145;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+145){
                  y13=n.windowHeight/2-690/2+145;
              }
              
                      var x14=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-155){
                  x14=n.windowWidth/2+690/2-155;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+155){
                  x14=n.windowWidth/2-690/2+155;
              } 
              var y14=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-155){
                  y14=n.windowHeight/2+690/2-155;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+155){
                  y14=n.windowHeight/2-690/2+155;
              }
              
                      var x15=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-165){
                  x15=n.windowWidth/2+690/2-165;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+165){
                  x15=n.windowWidth/2-690/2+165;
              } 
              var y15=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-165){
                  y15=n.windowHeight/2+690/2-165;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+165){
                  y15=n.windowHeight/2-690/2+165;
              }
              
                      var x16=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-175){
                  x16=n.windowWidth/2+690/2-175;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+175){
                  x16=n.windowWidth/2-690/2+175;
              } 
              var y16=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-175){
                  y16=n.windowHeight/2+690/2-175;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+175){
                  y16=n.windowHeight/2-690/2+175;
              }
              
                      var x17=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-185){
                  x17=n.windowWidth/2+690/2-185;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+185){
                  x17=n.windowWidth/2-690/2+185;
              } 
              var y17=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-185){
                  y17=n.windowHeight/2+690/2-185;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+185){
                  y17=n.windowHeight/2-690/2+185;
              }
              
                      var x18=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-195){
                  x18=n.windowWidth/2+690/2-195;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+195){
                  x18=n.windowWidth/2-690/2+195;
              } 
              var y18=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-195){
                  y18=n.windowHeight/2+690/2-195;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+195){
                  y18=n.windowHeight/2-690/2+195;
              }
              
                      var x19=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-205){
                  x19=n.windowWidth/2+690/2-205;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+205){
                  x19=n.windowWidth/2-690/2+205;
              } 
              var y19=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-205){
                  y19=n.windowHeight/2+690/2-205;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+205){
                  y19=n.windowHeight/2-690/2+205;
              }
              
                      var x20=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-215){
                  x20=n.windowWidth/2+690/2-215;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+215){
                  x20=n.windowWidth/2-690/2+215;
              } 
              var y20=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-215){
                  y20=n.windowHeight/2+690/2-215;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+215){
                  y20=n.windowHeight/2-690/2+215;
              }
              
                      var x21=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-225){
                  x21=n.windowWidth/2+690/2-225;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+225){
                  x21=n.windowWidth/2-690/2+225;
              } 
              var y21=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-225){
                  y21=n.windowHeight/2+690/2-225;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+225){
                  y21=n.windowHeight/2-690/2+225;
              }
              
                      var x22=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-235){
                  x22=n.windowWidth/2+690/2-235;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+235){
                  x22=n.windowWidth/2-690/2+235;
              } 
              var y22=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-235){
                  y22=n.windowHeight/2+690/2-235;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+235){
                  y22=n.windowHeight/2-690/2+235;
              }
              
                      var x23=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-245){
                  x23=n.windowWidth/2+690/2-245;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+245){
                  x23=n.windowWidth/2-690/2+245;
              } 
              var y23=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-245){
                  y23=n.windowHeight/2+690/2-245;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+245){
                  y23=n.windowHeight/2-690/2+245;
              }
              
                      var x24=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-255){
                  x24=n.windowWidth/2+690/2-255;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+255){
                  x24=n.windowWidth/2-690/2+255;
              } 
              var y24=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-255){
                  y24=n.windowHeight/2+690/2-255;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+255){
                  y24=n.windowHeight/2-690/2+255;
              }
              
                      var x25=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-265){
                  x25=n.windowWidth/2+690/2-265;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+265){
                  x25=n.windowWidth/2-690/2+265;
              } 
              var y25=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-265){
                  y25=n.windowHeight/2+690/2-265;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+265){
                  y25=n.windowHeight/2-690/2+265;
              }
              
                      var x26=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-275){
                  x26=n.windowWidth/2+690/2-275;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+275){
                  x26=n.windowWidth/2-690/2+275;
              } 
              var y26=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-275){
                  y26=n.windowHeight/2+690/2-275;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+275){
                  y26=n.windowHeight/2-690/2+275;
              }
              
                   var x27=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-285){
                  x27=n.windowWidth/2+690/2-285;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+285){
                  x27=n.windowWidth/2-690/2+285;
              } 
              var y27=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-285){
                  y27=n.windowHeight/2+690/2-285;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+285){
                  y27=n.windowHeight/2-690/2+285;
              }
              
                   var x28=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-295){
                  x28=n.windowWidth/2+690/2-295;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+295){
                  x28=n.windowWidth/2-690/2+295;
              } 
              var y28=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-295){
                  y28=n.windowHeight/2+690/2-295;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+295){
                  y28=n.windowHeight/2-690/2+295;
              }
              
                   var x29=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-305){
                  x29=n.windowWidth/2+690/2-305;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+305){
                  x29=n.windowWidth/2-690/2+305;
              } 
              var y29=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-305){
                  y29=n.windowHeight/2+690/2-305;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+305){
                  y29=n.windowHeight/2-690/2+305;
              }
              
                   var x30=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-315){
                  x30=n.windowWidth/2+690/2-315;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+315){
                  x30=n.windowWidth/2-690/2+315;
              } 
              var y30=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-315){
                  y30=n.windowHeight/2+690/2-315;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+315){
                  y30=n.windowHeight/2-690/2+315;
              }
              
                   var x31=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-325){
                  x31=n.windowWidth/2+690/2-325;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+325){
                  x31=n.windowWidth/2-690/2+325;
              } 
              var y31=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-325){
                  y31=n.windowHeight/2+690/2-325;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+325){
                  y31=n.windowHeight/2-690/2+325;
              }
              
                   var x32=n.mouseX;
                if(n.mouseX>n.windowWidth/2+690/2-335){
                  x32=n.windowWidth/2+690/2-335;
              } 
                else if(n.mouseX<n.windowWidth/2-690/2+335){
                  x32=n.windowWidth/2-690/2+335;
              } 
              var y32=n.mouseY;
                if(n.mouseY>n.windowHeight/2+690/2-335){
                  y32=n.windowHeight/2+690/2-335;
              } 
                else if(n.mouseY<n.windowHeight/2-690/2+335){
                  y32=n.windowHeight/2-690/2+335;
              }
              
              n.background('#F0F0C9');
              n.fill('#F0F0C9')
              n.stroke('#124E78')
              n.strokeWeight(3);
              n.square(n.windowWidth/2, n.windowHeight/2, 690, 20);
              n.square(x32, y32, 670, 20);
              n.square(x31, y31, 650, 20);
              n.square(x30, y30, 630, 20);
              n.square(x29, y29, 610, 20);
              n.square(x28, y28, 590, 20);
              n.square(x27, y27, 570, 20);
              n.square(x26, y26, 550, 20);
              n.square(x25, y25, 530, 20);
              n.square(x24, y24, 510, 20);
              n.square(x23, y23, 490, 20);
              n.square(x22, y22, 470, 20);
              n.square(x21, y21, 450, 20);
              n.square(x20, y20, 430, 20);
              n.square(x19, y19, 410, 20);
              n.square(x18, y18, 390, 20);
              n.square(x17, y17, 370, 20);
              n.square(x16, y16, 350, 20);
              n.square(x15, y15, 330, 20);
              n.square(x14, y14, 310, 20);
              n.square(x13, y13, 290, 20);
              n.square(x12, y12, 270, 20);
              n.square(x11, y11, 250, 20);
              n.square(x10, y10, 230, 20);
              n.square(x9, y9, 210, 20);
              n.square(x8, y8, 190, 20);
              n.square(x7, y7, 170, 20);
              n.square(x6, y6, 150, 20);
              n.square(x5, y5, 130, 20);
              n.square(x4, y4, 110, 20);
              n.square(x3, y3, 90, 20);
              n.square(x2, y2, 70, 20);
              n.square(x1, y1, 50, 20);
              n.square(x, y, 30, 20);
            }
              
                        };
                      
 // Wrap the p5.js sketch with IntersectionObserver
 function initializeSketch3() {
  const observer114 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.id === 'hoofdstuk4' && entry.isIntersecting) {
          hoofdstuk4.isRunning3 = true;
          console.log('hoofdstuk4 is running');
        } else {
          hoofdstuk4.isRunning3 = false;
          console.log('hoofdstuk4 is not running');
        }
      });
    },{
      rootMargin: '-100px'
  });
    const testElement3 = document.getElementById('hoofdstuk4');
    observer114.observe(testElement3);
};
    const hoofdstuk4 = new p5(b, 'hoofdstuk4');
    initializeSketch3();  

                      let w = function(m) {
                        m.isRunning4 = true;
                  
                        let r3 = 255, g3 = 255, b3 = 255; 
                        let r2 = 255, g2 = 255, b2 = 255; 
                        let r1 = 255, g1 = 255, b1 = 255; 
                        let r = 255, g = 255, b = 255, bg = 255;
                        let x1, y1;
                        let x, y;
                        var words = ["Click on space!", "Click again :)", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
                        var index = 0;
                        
                        
                        m.setup = function () {
                          m.createCanvas(m.windowWidth, m.windowHeight);
                          x = 0;
                          y = m.height;
                          x1 = 0;
                          y1 = m.height;
                          m.textAlign(m.CENTER, m.CENTER);
                        }
                        
                         m.keyPressed = function () {
                            if (m.key === ' ') {
                              // Spacebar is pressed
                              // Perform your desired action here
                              r = m.random(255);
                              g = m.random(255);
                              b = m.random(255);
                              bg = m.random(255);
                              r1 = m.random(255);
                              g1 = m.random(255);
                              b1 = m.random(255);
                              r2 = m.random(255);
                              g2 = m.random(255);
                              b2 = m.random(255);
                              r3 = m.random(255);
                              g3 = m.random(255);
                              b3 = m.random(255);
                              index = index + 1;
                        
                              if (index == words.length) {
                                index = 0;
                              }
                            }
                          }
                          
                        m.draw = function () {
                          if (!m.isRunning4) {
                            return;
                          }
                          m.background(255)
                          m.noStroke();
                          m.fill(r, g, b);
                          m.square(0, 0, x);
                          m.fill(r1, g1, b1);
                          m.square(60, 60, y);
                          m.fill(r2, g2, b2);
                          m.square(m.windowWidth/2, m.windowHeight/2, x1);
                          m.fill(r3, g3, b3);
                          m.square(m.windowWidth/2-60, m.windowHeight/2-60, y1);
                          
                            // Jiggling randomly on the horizontal axis
                          x = x + 1;
                          // Moving up at a constant speed
                          y = y - 1;
                          
                            // Jiggling randomly on the horizontal axis
                          x1 = x1 + 1.5;
                          // Moving up at a constant speed
                          y1 = y1 - 1.5;
                          
                          // Reset to the bottom
                          if (y < 0) {
                            y = m.height;
                          }
                          
                          if (x > m.windowWidth) {
                            x = 0;
                          }
                          
                            // Reset to the bottom
                          if (y1 < 0) {
                            y1 = m.height;
                          }
                          
                          if (x1 > m.windowWidth/2) {
                            x1 = 0;
                          }
                          m.push();
                          m.textSize(32);
                          m.fill(0);
                          m.text(words[index], m.windowWidth/2, m.windowHeight/2);
                          m.pop();
                        }
                          };
                          // Wrap the p5.js sketch with IntersectionObserver
                    function initializeSketch4() {
                      const observer115 = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.target.id === 'hoofdstuk5' && entry.isIntersecting) {
                              hoofdstuk5.isRunning4 = true;
                              console.log('hoofdstuk5 is running');
                            } else {
                              hoofdstuk5.isRunning4 = false;
                              console.log('hoofdstuk5 is not running');
                            }
                          });
                        },{
                          rootMargin: '-100px'
                      });
                        const testElement4 = document.getElementById('hoofdstuk5');
                        observer115.observe(testElement4);
                    };
                    
                    
                      
                    const hoofdstuk5 = new p5(w, 'hoofdstuk5');
                    initializeSketch4();  

                      let z = function(h) {
                        h.isRunning5 = true;

                        let maxPosition = 0; // Variable to store the maximum position
                        let lineX; // X-coordinate of the h.line
                        let lineXX; // X-coordinate of the h.line
                        let lineXXX; // X-coordinate of the h.line
                        let lineXXXX; // X-coordinate of the h.line
                        let lineXXXXX; // X-coordinate of the h.line
                        let lineXXXXXX; // X-coordinate of the h.line
                        
                        
                        
                        
                        
                        
                        h.setup = function () {
                          h.createCanvas(h.windowWidth, h.windowHeight);
                            lineX = h.windowWidth/4+h.windowWidth/2 ; // Set the X-coordinate of the h.line to the middle of the window
                            lineXX = h.windowWidth/2+50 ; // Set the X-coordinate of the h.line to the middle of the window
                            lineXXX = h.windowWidth/2 ; // Set the X-coordinate of the h.line to the middle of the window
                            lineXXXX = h.windowWidth/2-50 ; // Set the X-coordinate of the h.line to the middle of the window
                            lineXXXXX = h.windowWidth/4 ; // Set the X-coordinate of the h.line to the middle of the window
                            lineXXXXXX = 0 ; // Set the X-coordinate of the h.line to the middle of the window
                        }
                        
                        h.draw = function () {
                          if (!h.isRunning5) {
                            return;
                          }
                          h.background('#ffffff');
                                        // Check if the object is above the h.line
                          if (h.mouseX < lineXXXXXX) {
                            // Draw the object at the mouse position
                                h.noStroke();
                            h.fill('#E3E4E3');
                            h.square(0, 0, h.windowHeight);
                          } else {
                            // Draw the object at the h.line
                                h.noStroke();
                            h.fill('#E3E4E3');
                            h.square(h.mouseX, 0, h.windowHeight);
                          }
                          
                                      // Check if the object is above the h.line
                          if (h.mouseX < lineXXXXX) {
                            // Draw the object at the mouse position
                                h.noStroke();
                            h.fill('#EDEEED');
                            h.square(h.windowWidth/4, 0, h.windowHeight);
                          } else {
                            // Draw the object at the h.line
                                h.noStroke();
                            h.fill('#EDEEED');
                            h.square(h.mouseX, 0, h.windowHeight);
                          }
                          
                                    // Check if the object is above the h.line
                          if (h.mouseX < lineXXXX) {
                            // Draw the object at the mouse position
                                h.noStroke();
                            h.fill('#F2F0EE');
                            h.square(h.windowWidth/2-50, 0, h.windowHeight);
                          } else {
                            // Draw the object at the h.line
                                h.noStroke();
                            h.fill('#F2F0EE');
                            h.square(h.mouseX, 0, h.windowHeight);
                          }
                          
                                  // Check if the object is above the h.line
                          if (h.mouseX < lineXXX) {
                            // Draw the object at the mouse position
                                h.noStroke();
                            h.fill('#CBCBCA');
                            h.square(h.windowWidth/2, 0, h.windowHeight);
                          } else {
                            // Draw the object at the h.line
                                h.noStroke();
                            h.fill('#CBCBCA');
                            h.square(h.mouseX, 0, h.windowHeight);
                          }
                          
                                // Check if the object is above the h.line
                          if (h.mouseX < lineXX) {
                            // Draw the object at the mouse position
                                h.noStroke();
                            h.fill('#E3E4E3');
                            h.square(h.windowWidth/2+50, 0, h.windowHeight);
                          } else {
                            // Draw the object at the h.line
                                h.noStroke();
                            h.fill('#E3E4E3');
                            h.square(h.mouseX, 0, h.windowHeight);
                          }
                          
                            // Check if the object is above the h.line
                          if (h.mouseX < lineX) {
                            // Draw the object at the mouse position
                                h.noStroke();
                            h.fill('#F7F7F8');
                            h.square(h.windowWidth/4+h.windowWidth/2, 0, h.windowHeight);
                          } else {
                            // Draw the object at the h.line
                                h.noStroke();
                            h.fill('#F7F7F8');
                            h.square(h.mouseX, 0, h.windowHeight);
                          }
                          
                          if (h.mouseX < lineXX) {
                            h.push();
                          h.stroke(0);
                        h.line(h.windowWidth/2+50, h.windowHeight/7, h.windowWidth, h.windowHeight/7+100);  
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*2, h.windowWidth, (h.windowHeight/7)*2+100);  
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*3, h.windowWidth, (h.windowHeight/7)*3+100); 
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*4, h.windowWidth, (h.windowHeight/7)*4+100);
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*5, h.windowWidth, (h.windowHeight/7)*5+100); 
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*6, h.windowWidth, (h.windowHeight/7)*6+100); 
                          h.pop();
                          } else {
                            h.push();
                          h.stroke(0);
                        h.line(h.mouseX, h.windowHeight/7, h.windowWidth, h.windowHeight/7+100);  
                        h.line(h.mouseX, (h.windowHeight/7)*2, h.windowWidth, (h.windowHeight/7)*2+100);  
                        h.line(h.mouseX, (h.windowHeight/7)*3, h.windowWidth, (h.windowHeight/7)*3+100);  
                        h.line(h.mouseX, (h.windowHeight/7)*4, h.windowWidth, (h.windowHeight/7)*4+100);  
                        h.line(h.mouseX, (h.windowHeight/7)*5, h.windowWidth, (h.windowHeight/7)*5+100);  
                        h.line(h.mouseX, (h.windowHeight/7)*6, h.windowWidth, (h.windowHeight/7)*6+100);  
                          h.pop();
                          }
                          
                            if (h.mouseX < lineXXX) {
                            h.push();
                          h.stroke(0);
                        h.line(h.windowWidth/2, h.windowHeight/7+20, h.windowWidth/2+50, h.windowHeight/7);  
                        h.line(h.windowWidth/2, (h.windowHeight/7)*2+20, h.windowWidth/2+50, (h.windowHeight/7)*2);  
                        h.line(h.windowWidth/2, (h.windowHeight/7)*3+20, h.windowWidth/2+50, (h.windowHeight/7)*3); 
                        h.line(h.windowWidth/2, (h.windowHeight/7)*4+20, h.windowWidth/2+50, (h.windowHeight/7)*4);
                        h.line(h.windowWidth/2, (h.windowHeight/7)*5+20, h.windowWidth/2+50, (h.windowHeight/7)*5); 
                        h.line(h.windowWidth/2, (h.windowHeight/7)*6+20, h.windowWidth/2+50, (h.windowHeight/7)*6); 
                          h.pop();
                          } else {
                            h.push();
                          h.stroke(0);
                        h.line(h.mouseX, h.windowHeight/7+20, h.windowWidth/2+50, h.windowHeight/7);  
                        h.line(h.mouseX, (h.windowHeight/7)*2+20, h.windowWidth/2+50, (h.windowHeight/7)*2);  
                        h.line(h.mouseX, (h.windowHeight/7)*3+20, h.windowWidth/2+50, (h.windowHeight/7)*3);  
                        h.line(h.mouseX, (h.windowHeight/7)*4+20, h.windowWidth/2+50, (h.windowHeight/7)*4);  
                        h.line(h.mouseX, (h.windowHeight/7)*5+20, h.windowWidth/2+50, (h.windowHeight/7)*5);  
                        h.line(h.mouseX, (h.windowHeight/7)*6+20, h.windowWidth/2+50, (h.windowHeight/7)*6);  
                          h.pop();
                          }
                          
                              if (h.mouseX < lineXXXX) {
                            h.push();
                          h.stroke(0);
                        h.line(h.windowWidth/2, h.windowHeight/7+20, h.windowWidth/2-50, h.windowHeight/7);  
                        h.line(h.windowWidth/2, (h.windowHeight/7)*2+20, h.windowWidth/2-50, (h.windowHeight/7)*2);  
                        h.line(h.windowWidth/2, (h.windowHeight/7)*3+20, h.windowWidth/2-50, (h.windowHeight/7)*3); 
                        h.line(h.windowWidth/2, (h.windowHeight/7)*4+20, h.windowWidth/2-50, (h.windowHeight/7)*4);
                        h.line(h.windowWidth/2, (h.windowHeight/7)*5+20, h.windowWidth/2-50, (h.windowHeight/7)*5); 
                        h.line(h.windowWidth/2, (h.windowHeight/7)*6+20, h.windowWidth/2-50, (h.windowHeight/7)*6); 
                          h.pop();
                          } else {
                            h.push();
                          h.stroke(0);
                        h.line(h.mouseX, h.windowHeight/7, h.windowWidth/2, h.windowHeight/7+20);  
                        h.line(h.mouseX, (h.windowHeight/7)*2, h.windowWidth/2, (h.windowHeight/7)*2+20);  
                        h.line(h.mouseX, (h.windowHeight/7)*3, h.windowWidth/2, (h.windowHeight/7)*3+20);  
                        h.line(h.mouseX, (h.windowHeight/7)*4, h.windowWidth/2, (h.windowHeight/7)*4+20);  
                        h.line(h.mouseX, (h.windowHeight/7)*5, h.windowWidth/2, (h.windowHeight/7)*5+20);  
                        h.line(h.mouseX, (h.windowHeight/7)*6, h.windowWidth/2, (h.windowHeight/7)*6+20);  
                          h.pop();
                          }
                          
                              if (h.mouseX < lineXXXXX) {
                            h.push();
                          h.stroke(0);
                        h.line(h.windowWidth/4, h.windowHeight/7+20, h.windowWidth/2-50, h.windowHeight/7);  
                        h.line(h.windowWidth/4, (h.windowHeight/7)*2+20, h.windowWidth/2-50, (h.windowHeight/7)*2);  
                        h.line(h.windowWidth/4, (h.windowHeight/7)*3+20, h.windowWidth/2-50, (h.windowHeight/7)*3); 
                        h.line(h.windowWidth/4, (h.windowHeight/7)*4+20, h.windowWidth/2-50, (h.windowHeight/7)*4);
                        h.line(h.windowWidth/4, (h.windowHeight/7)*5+20, h.windowWidth/2-50, (h.windowHeight/7)*5); 
                        h.line(h.windowWidth/4, (h.windowHeight/7)*6+20, h.windowWidth/2-50, (h.windowHeight/7)*6); 
                          h.pop();
                          } else {
                            h.push();
                          h.stroke(0);
                        h.line(h.mouseX, h.windowHeight/7+20, h.windowWidth/2-50, h.windowHeight/7);  
                        h.line(h.mouseX, (h.windowHeight/7)*2+20, h.windowWidth/2-50, (h.windowHeight/7)*2);  
                        h.line(h.mouseX, (h.windowHeight/7)*3+20, h.windowWidth/2-50, (h.windowHeight/7)*3);  
                        h.line(h.mouseX, (h.windowHeight/7)*4+20, h.windowWidth/2-50, (h.windowHeight/7)*4);  
                        h.line(h.mouseX, (h.windowHeight/7)*5+20, h.windowWidth/2-50, (h.windowHeight/7)*5);  
                        h.line(h.mouseX, (h.windowHeight/7)*6+20, h.windowWidth/2-50, (h.windowHeight/7)*6);  
                          h.pop();
                          }
                          
                            if (h.mouseX < lineXXXXXX) {
                            h.push();
                          h.stroke(0);
                        h.line(h.windowWidth/2+50, h.windowHeight/7, h.windowWidth, h.windowHeight/7+100);  
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*2, h.windowWidth, (h.windowHeight/7)*2+100);  
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*3, h.windowWidth, (h.windowHeight/7)*3+100); 
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*4, h.windowWidth, (h.windowHeight/7)*4+100);
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*5, h.windowWidth, (h.windowHeight/7)*5+100); 
                        h.line(h.windowWidth/2+50, (h.windowHeight/7)*6, h.windowWidth, (h.windowHeight/7)*6+100); 
                          h.pop();
                          } else {
                            h.push();
                          h.stroke(0);
                        h.line(h.mouseX, h.windowHeight/7, h.windowWidth/4, h.windowHeight/7+50);  
                        h.line(h.mouseX, (h.windowHeight/7)*2, h.windowWidth/4, (h.windowHeight/7)*2+50);  
                        h.line(h.mouseX, (h.windowHeight/7)*3, h.windowWidth/4, (h.windowHeight/7)*3+50);  
                        h.line(h.mouseX, (h.windowHeight/7)*4, h.windowWidth/4, (h.windowHeight/7)*4+50);  
                        h.line(h.mouseX, (h.windowHeight/7)*5, h.windowWidth/4, (h.windowHeight/7)*5+50);  
                        h.line(h.mouseX, (h.windowHeight/7)*6, h.windowWidth/4, (h.windowHeight/7)*6+50);  
                          h.pop();
                          }
                        }
                        };

                                                  // Wrap the p5.js sketch with IntersectionObserver
                    function initializeSketch5() {
                      const observer116 = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.target.id === 'hoofdstuk6' && entry.isIntersecting) {
                              hoofdstuk6.isRunning5 = true;
                              console.log('hoofdstuk6 is running');
                            } else {
                              hoofdstuk6.isRunning5 = false;
                              console.log('hoofdstuk6 is not running');
                            }
                          });
                        },{
                          rootMargin: '-100px'
                      });
                        const testElement5 = document.getElementById('hoofdstuk6');
                        observer116.observe(testElement5);
                    };
                    
                    
                      
                    const hoofdstuk6 = new p5(z, 'hoofdstuk6');
                    initializeSketch5();  
                                    

                        let v = function(o) {
                          o.isRunning6 = true;

                          let traingleY; // X-coordinate of the h.line
                          let diepte; // X-coordinate of the h.line
                          let diepte2; // X-coordinate of the h.line
                          
                          
                          o.setup = function () {
                            o.createCanvas(o.windowWidth, o.windowHeight);
                                traingleY = o.windowHeight/4 ; // Set the X-coordinate of the h.line to the middle of the window
                            diepte =  o.windowHeight/4; // Set the X-coordinate of the h.line to the middle of the window
                            diepte2 =  o.windowWidth/2; // Set the X-coordinate of the h.line to the middle of the window
                          
                          }
                          
                          o.draw = function () {
                            if (!o.isRunning6) {
                              return;
                            }
                            o.background('#D9E0D2');
                            o.noStroke();
                            o.fill('#355559');
                            o.rect(0,0,o.windowWidth/12,o.windowHeight)
                            o.fill('#1D2C2D');
                            o.noStroke();
                            o.beginShape();
                            o.vertex(o.windowWidth/2-100, 100);
                            o.vertex(o.windowWidth/2+100, 200);
                            o.vertex(o.windowWidth/2+100, o.windowHeight-100);
                            o.vertex(o.windowWidth/2-100, o.windowHeight-170);
                            o.endShape();
                            if (o.mouseY < traingleY) {
                                o.noStroke();
                            o.fill('#ffffff');
                            o.triangle(o.windowWidth-o.windowHeight/4-20, -o.windowHeight/4+o.mouseY, o.windowWidth, 0, o.windowWidth, o.mouseY+20);
                            o.noStroke();
                            o.fill('#88C9D1');
                            o.triangle(o.windowWidth-o.windowHeight/4, -o.windowHeight/4+o.mouseY, o.windowWidth, 0, o.windowWidth, o.mouseY);
                              } else {
                                o.noStroke();
                            o.fill('#ffffff');
                            o.triangle(o.windowWidth-o.windowHeight/4-20, 0, o.windowWidth, 0, o.windowWidth, o.windowHeight/4+20);
                            o.noStroke();
                            o.fill('#88C9D1');
                            o.triangle(o.windowWidth-o.windowHeight/4, 0, o.windowWidth, 0, o.windowWidth, o.windowHeight/4);
                              }
                            
                          
                            o.fill('#ffffff');
                            o.noStroke();
                            o.beginShape();
                            o.vertex(o.windowWidth/2+100, 200);
                            o.vertex(o.windowWidth/2+200, 190);
                            o.vertex(o.windowWidth/2+200, o.windowHeight-65);
                            o.vertex(o.windowWidth/2+100, o.windowHeight-100);
                            o.endShape();
                            
                              if (o.mouseY < diepte) {
                            o.fill('#545B52');
                            o.noStroke();
                            o.beginShape();
                            o.vertex(o.windowWidth/2-100, 30);
                            o.vertex(o.windowWidth/2+200, 190);
                            o.vertex(o.windowWidth/2+100, 200);
                            o.vertex(o.windowWidth/2-100, 100);
                            o.endShape();
                              } else {
                            o.fill('#545B52');
                            o.noStroke();
                            o.beginShape();
                            o.vertex(o.windowWidth/2-100, o.mouseY-o.windowHeight/4+30);
                            o.vertex(o.windowWidth/2+200, o.mouseY-o.windowHeight/4+190);
                            o.vertex(o.windowWidth/2+100, 200);
                            o.vertex(o.windowWidth/2-100, 100);
                            o.endShape();
                              }
                            
                                if (o.mouseX < diepte2) {
                            o.fill('#7B847F');
                            o.noStroke();
                            o.beginShape();
                            o.vertex(o.mouseX+90, 200);
                            o.vertex(o.windowWidth/2+200, 190);
                            o.vertex(o.windowWidth/2+200, o.windowHeight-65);
                            o.vertex(o.windowWidth/2+100, o.windowHeight-100);
                            o.endShape();
                              } else {
                            o.fill('#7B847F');
                            o.noStroke();
                            o.beginShape();
                            o.vertex(o.windowWidth/2+100, 200);
                            o.vertex(o.windowWidth/2+200, 190);
                            o.vertex(o.windowWidth/2+200, o.windowHeight-65);
                            o.vertex(o.windowWidth/2+100, o.windowHeight-100);
                            o.endShape();
                              }
                          
                          
                          }};
                    // Wrap the p5.js sketch with IntersectionObserver
                    function initializeSketch6() {
                      const observer117 = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.target.id === 'hoofdstuk7' && entry.isIntersecting) {
                              hoofdstuk7.isRunning6 = true;
                              console.log('hoofdstuk7 is running');
                            } else {
                              hoofdstuk7.isRunning6 = false;
                              console.log('hoofdstuk7 is not running');
                            }
                          });
                        },{
                          rootMargin: '-100px'
                      });
                        const testElement6 = document.getElementById('hoofdstuk7');
                        observer117.observe(testElement6);
                    };
                    
                    
                      
                    const hoofdstuk7 = new p5(v, 'hoofdstuk7');
                    initializeSketch6();                                    

                                              
let i = function(k) {
  k.isRunning7 = true;
  let canvasMaxWidth = 270; // Adjust this value as per your requirement
    let canvasMaxWidth1 = 300; // Adjust this value as per your requirement



                      k.setup = function () {
                        k.createCanvas(k.windowWidth, k.windowHeight);
                        
                        
                      }
                      
                      k.draw = function () {
                        if (!k.isRunning7) {
                          return;
                        }
                        // Verticale gradiëntkleuren
                        let kleurBoven = k.color(208, 218, 232); // Bovenste kleur (rood)
                        let kleurOnder = k.color(213, 222, 233); // Onderste kleur (blauw)
                        let canvasWidth = k.min(canvasMaxWidth, k.mouseX/3);
                        let canvasWidth1 = k.min(canvasMaxWidth1, k.mouseX/3);

                        
                        // Verticale gradiënt
                        for (let y = 0; y < k.height; y++) {
                          let inter = k.map(y, 0, k.height, 0, 1);
                          let kleur = k.lerpColor(kleurBoven, kleurOnder, inter);
                          k.stroke(kleur);
                          k.line(0, y, k.width, y);
                        }
                        
                        k.fill('#ffffff');
                        k.noStroke();
                        k.beginShape();
                        k.vertex(k.windowWidth/6+k.mouseX, canvasWidth1);
                        k.vertex(k.windowWidth-50, k.windowHeight/3+k.windowHeight/20);
                          k.vertex(k.windowWidth/3+k.windowWidth/6, k.windowHeight/2);
                        k.vertex(k.windowWidth,k.windowHeight/2+k.windowHeight/4)
                          k.vertex(k.windowWidth, 0);
                      
                        k.endShape();
                        
                            k.fill('#DB7B5B');
                        k.noStroke();
                        k.beginShape();
                        k.vertex(k.windowWidth/3, k.windowHeight/2);
                        k.vertex(k.windowWidth/3, k.windowHeight/2-k.windowHeight/5);
                        k.vertex(k.windowWidth-k.windowWidth/2+k.mouseX/2, k.windowHeight/3-k.windowHeight/10-k.mouseX/8);
                        k.vertex(k.windowWidth-50-k.windowWidth/6+k.mouseX/4.5, k.windowHeight/3+k.windowHeight/20-k.mouseX/60);
                        k.endShape();
                        
                          
                        k.fill('#E3936D');
                        k.noStroke();
                        k.beginShape();
                        k.vertex(0+k.mouseX, canvasWidth);
                        k.vertex(k.windowWidth/6+k.mouseX, canvasWidth1);
                        k.vertex(k.windowWidth-50, k.windowHeight/3+k.windowHeight/20);
                        k.vertex(k.windowWidth-50-k.windowWidth/6, k.windowHeight/3+k.windowHeight/20);
                        k.endShape();
                        
                          k.fill('#E3936D');
                        k.noStroke();
                        k.beginShape();
                        k.vertex(k.windowWidth-50, k.windowHeight/3+k.windowHeight/20);
                        k.vertex(k.windowWidth-50-k.windowWidth/6, k.windowHeight/3+k.windowHeight/20);
                        k.vertex(k.windowWidth/3, k.windowHeight/2);
                        k.vertex(k.windowWidth/3+k.windowWidth/6, k.windowHeight/2);
                        k.endShape();
                        
                        k.fill('#E3936D');
                        k.noStroke();
                        k.beginShape();
                        k.vertex(k.windowWidth/3, k.windowHeight/2);
                        k.vertex(k.windowWidth/3+k.windowWidth/6, k.windowHeight/2);
                        k.vertex(k.windowWidth,k.windowHeight/2+k.windowHeight/4)
                        k.vertex(k.windowWidth,k.windowHeight/2+k.windowHeight/4+k.windowHeight/20)
                        k.endShape();
                        
                      
                      }};

                      // Wrap the p5.js sketch with IntersectionObserver
                    function initializeSketch8() {
                      const observer118 = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.target.id === 'hoofdstuk8' && entry.isIntersecting) {
                              hoofdstuk8.isRunning7 = true;
                              console.log('hoofdstuk8 is running');
                            } else {
                              hoofdstuk8.isRunning7 = false;
                              console.log('hoofdstuk8 is not running');
                            }
                          });
                        },{
                          rootMargin: '-100px'
                      });
                        const testElement7 = document.getElementById('hoofdstuk8');
                        observer118.observe(testElement7);
                    };
                    
                    
                      
                    const hoofdstuk8 = new p5(i, 'hoofdstuk8');
                    initializeSketch8(); 
                      

                      let ji = function(kl) {
                        kl.isRunning8 = true;
                        let currentColorIndex = 0; // Index of the current kl.color
                        let x = 0; // Initial x position of the shape
                        let fillColor; // Variable to store the kl.fill kl.color
                        let x1 = 0; // Initial x position of the shape
                        let fillColor1; // Variable to store the kl.fill kl.color
                        let x2 = 0; // Initial x position of the shape
                        let fillColor2; // Variable to store the kl.fill kl.color
                        let x3 = 0; // Initial x position of the shape
                        let fillColor3; // Variable to store the kl.fill kl.color
                      
                        kl.setup = function() {
                          kl.createCanvas(kl.windowWidth, kl.windowHeight);
                          fillColor = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate initial kl.random kl.fill kl.color
                          fillColor1 = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate initial kl.random kl.fill kl.color
                          fillColor2 = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate initial kl.random kl.fill kl.color
                          fillColor3 = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate initial kl.random kl.fill kl.color
                      
                          setInterval(resetSketch, 10000); // Call the resetSketch function every 10 seconds (10000 milliseconds)
                        };
                      
                        kl.draw = function() {
                          if (!kl.isRunning8) {
                            return;
                          }
                          // Update the position of the shape
                          x = x + 2;
                          x1 = x1 + 2;
                          x2 = x2 + 2;
                          x3 = x3 + 2;
                      
                          // Reset the x position and generate a new kl.fill kl.color when it reaches the right edge of the canvas
                          if (x > kl.windowWidth / 3 + kl.windowWidth / 2) {
                            x = 0;
                            fillColor = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate a new kl.random kl.fill kl.color
                          }
                      
                          if (x1 > kl.windowWidth - kl.windowWidth / 4) {
                            x1 = 0;
                            fillColor1 = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate a new kl.random kl.fill kl.color
                          }
                      
                          if (x2 > kl.windowWidth / 3) {
                            x2 = 0;
                            fillColor2 = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate a new kl.random kl.fill kl.color
                          }
                      
                          if (x3 > kl.windowWidth / 3) {
                            x3 = 0;
                            fillColor3 = kl.color(kl.random(255), kl.random(255), kl.random(255)); // Generate a new kl.random kl.fill kl.color
                          }
                      
                          // Set the kl.fill kl.color
                          kl.fill(fillColor);
                          kl.noStroke();
                          kl.beginShape();
                          kl.vertex(0, kl.windowHeight / 5);
                          kl.vertex(x, kl.windowHeight / 3);
                          kl.vertex(x, kl.windowHeight);
                          kl.vertex(0, kl.windowHeight);
                          kl.endShape();
                      
                          // Set the kl.fill kl.color
                          kl.fill(fillColor1);
                          kl.noStroke();
                          kl.beginShape();
                          kl.vertex(kl.windowWidth, kl.windowHeight / 2);
                          kl.vertex(kl.windowWidth - x1, kl.windowHeight / 7 + kl.windowHeight / 2);
                          kl.vertex(kl.windowWidth - x1, kl.windowHeight);
                          kl.vertex(kl.windowWidth, kl.windowHeight);
                          kl.endShape();
                      
                          // Set the kl.fill kl.color
                          kl.fill(fillColor2);
                          kl.noStroke();
                          kl.beginShape();
                          kl.vertex(kl.windowWidth, kl.windowHeight / 5);
                          kl.vertex(kl.windowWidth - x2, kl.windowHeight / 3);
                          kl.vertex(kl.windowWidth - x2, -kl.windowHeight / 400 + kl.windowHeight / 8 + kl.windowHeight / 2);
                          kl.vertex(kl.windowWidth, kl.windowHeight / 2);
                          kl.endShape();
                      
                          // Set the kl.fill kl.color
                          kl.fill(fillColor3);
                          kl.noStroke();
                          kl.beginShape();
                          kl.vertex(kl.windowWidth - kl.windowWidth / 3, kl.windowHeight / 2.5);
                          kl.vertex(kl.windowWidth - kl.windowWidth / 3, -kl.windowHeight / 400 + kl.windowHeight / 8 + kl.windowHeight / 2);
                          kl.vertex(kl.windowWidth / 2, kl.windowHeight / 7 + kl.windowHeight / 2);
                          kl.vertex(kl.windowWidth / 2, kl.windowHeight / 30 + kl.windowHeight / 2.5);
                          kl.endShape();
                        };
                      
                        function resetSketch() {
                          kl.clear(); // Clear the canvas
                        }
                      };

                                            // Wrap the p5.js sketch with IntersectionObserver
                    function initializeSketch9() {
                      const observer119 = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.target.id === 'hoofdstuk9' && entry.isIntersecting) {
                              hoofdstuk9.isRunning8 = true;
                              console.log('hoofdstuk9 is running');
                            } else {
                              hoofdstuk9.isRunning8 = false;
                              console.log('hoofdstuk9 is not running');
                            }
                          });
                        },{
                          rootMargin: '-100px'
                      });
                        const testElement9 = document.getElementById('hoofdstuk9');
                        observer119.observe(testElement9);
                    };
                    
                    
                      
                    const hoofdstuk9 = new p5(ji, 'hoofdstuk9');
                    initializeSketch9();                       

                          let bb = function(aa) {

                            let dim;
                            let c1,c2;
                            
                            
                            aa.setup = function () {
                              
                              
                              
                              aa.createCanvas(aa.windowWidth, aa.windowHeight);
                              
                                c1 = aa.color(100);
                              c2 = aa.color(220);
                              
                              for(let y=0; y<aa.height; y++){
                                n = aa.map(y,0,aa.height,0,2);
                                let newc = aa.lerpColor(c1,c2,n);
                                aa.stroke(newc);
                                aa.line(0,y,aa.width, y);
                              }
                              
                              
                              dim = aa.width ;
                              aa.colorMode(aa.RGB);
                              aa.noStroke();
                              aa.ellipseMode(aa.RADIUS);
                            }
                            
                            aa.draw = function () {
                              drawGradient(-aa.windowWidth/2, aa.height / 2);
                            }
                            
                            function drawGradient(x, y) {
                              let radius = dim;
                              let c = 255;
                              for (let r = radius; r > 0; --r) {
                                aa.fill(c);
                                aa.ellipse(x, y, r, r);
                                c -= 0.10; // Decrease the color value to create tints of gray
                              }
                            }}
                            
                            new p5(bb, 'hoofdstuk10');

                            let ad = function(xw) {
                              xw.isRunning10 = true;
                              let squares = [];
                              
                                xw.setup = function () {
                                xw.createCanvas(xw.windowWidth, xw.windowHeight);
                                xw.rectMode(xw.CENTER);
                              
                                // Create seven Square objects
                                squares.push(new Square(xw.windowWidth / 2, xw.windowHeight / 2, 50)); // Default size
                                squares.push(new Square(xw.windowWidth / 2, xw.windowHeight / 2, 100)); // Larger size
                                squares.push(new Square());
                                squares.push(new Square());
                                squares.push(new Square());
                                squares.push(new Square());
                                squares.push(new Square());
                              
                                // Set an interval to change the position every 5 seconds
                                setInterval(changePositions, 5000);
                              }
                              
                              xw.draw = function () {
                                if (!xw.isRunning10) {
                                return;
                              }
                                xw.background(0);
                              
                                // Update and draw each square
                                for (let i = 0; i < squares.length; i++) {
                                  squares[i].update();
                                  squares[i].draw();
                                }
                              }
                              
                              function changePositions() {
                                // Change the position of each square
                                for (let i = 0; i < squares.length; i++) {
                                  squares[i].changePosition();
                                }
                              }
                              
                              class Square {
                                constructor(x = xw.windowWidth / 2, y = xw.windowHeight / 2, size = 50) {
                                  this.currentX = x;
                                  this.currentY = y;
                                  this.targetX = this.currentX;
                                  this.targetY = this.currentY;
                                  this.size = size;
                                }
                              
                                update() {
                                  // Smoothly interpolate between current and target positions
                                  this.currentX = xw.lerp(this.currentX, this.targetX, 0.05);
                                  this.currentY = xw.lerp(this.currentY, this.targetY, 0.05);
                                }
                              
                                draw() {
                                  xw.noStroke();
                                  xw.square(this.currentX, this.currentY, this.size);
                                }
                              
                                changePosition() {
                                  // Generate random target positions within the canvas
                                  this.targetX = xw.random(xw.windowWidth);
                                  this.targetY = xw.random(xw.windowHeight);
                                }
                              }
                              
                                };

                                                                            // Wrap the p5.js sketch with IntersectionObserver
                    function initializeSketch11() {
                      const observer121 = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.target.id === 'hoofdstuk11' && entry.isIntersecting) {
                              hoofdstuk11.isRunning10 = true;
                              console.log('hoofdstuk11 is running');
                            } else {
                              hoofdstuk11.isRunning10 = false;
                              console.log('hoofdstuk11 is not running');
                            }
                          });
                        },{
                          rootMargin: '-100px'
                      });
                        const testElement11 = document.getElementById('hoofdstuk11');
                        observer121.observe(testElement11);
                    };
                    
                    
                      
                    const hoofdstuk11 = new p5(ad, 'hoofdstuk11');
                    initializeSketch11();    
                                
                                  new p5(ad, 'hoofdstuk11');

                                  let dd = function(zz) {
                                    zz.isRunning11 = true;
                                    
                                    //ga met qsdz, bekijken wat de mogelijkkheden zijn.
                                    let squareSize; // Initial size of the square
                                    let squareSize1; // Initial size of the square
                                    let squareSize2;
                                    let squareSize3;
                                    let isqPressed = false; // Boolean variable to track 'q' zz.key state
                                    let isdPressed = false; // Boolean variable to track 'd' zz.key state
                                    let iszPressed = false; // Boolean variable to track 'A' zz.key state
                                    let issPressed = false; // Boolean variable to track 'Z' zz.key state
                                    
                                    zz.setup = function () {
                                      zz.createCanvas(zz.windowWidth, zz.windowHeight);
                                      squareSize = zz.windowWidth / 2 + zz.windowWidth / 5; // Initialize the size of the square
                                      squareSize1 = zz.windowHeight / 2 + zz.windowHeight / 5;
                                      squareSize2 = 0;
                                      squareSize3 = 0;
                                    
                                    
                                    }
                                    
                                    zz.draw = function () {
                                                                      if (!zz.isRunning11) {
                                                                    return;
                                                                  }
                                      zz.background('#50A2A7');
                                      
                                    
                                      // Check if the 'q' zz.key is held down
                                      if (isqPressed) {
                                        // Increase the size of the square
                                        squareSize -= 5;
                                        squareSize2 -=5;
                                        squareSize3 -=5;
                                      }
                                    
                                      // Check if the 'd' zz.key is held down
                                      if (isdPressed) {
                                        // Decrease the size of the square
                                        squareSize += 5;
                                        squareSize2 +=5;
                                        squareSize3 +=5;
                                    
                                        
                                      }
                                      
                                        // Check if the 'z' zz.key is held down
                                      if (iszPressed) {
                                        // Increase the size of the square
                                        squareSize1 -= 5;
                                        squareSize3 -=5;
                                      }
                                    
                                      // Check if the 's' zz.key is held down
                                      if (issPressed) {
                                        // Decrease the size of the square
                                        squareSize1 += 5;
                                        squareSize3 +=5;
                                      }
                                      
                                      zz.fill('#9B2915');
                                      zz.strokeWeight(4)
                                      zz.stroke('#1C110A');
                                      zz.beginShape();
                                      zz.vertex(0, 0);
                                      zz.vertex(zz.windowWidth/10, 0);
                                      zz.vertex(squareSize, squareSize1);
                                      zz.vertex(squareSize, zz.windowHeight);
                                      zz.vertex(0,zz.windowHeight);
                                      zz.endShape();
                                     
                                      zz.fill('#E9B44C');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(0, zz.windowHeight/5);
                                      zz.vertex(squareSize, squareSize1+zz.windowHeight/10);
                                      zz.vertex(squareSize, zz.windowHeight / 2 + zz.windowHeight / 5+zz.windowHeight/10+10);
                                      zz.vertex(0, zz.windowHeight/5+30);
                                      zz.endShape();
                                      
                                      zz.fill('#E9B44C');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(0, zz.windowHeight/2+zz.windowHeight/4);
                                      zz.vertex(squareSize, squareSize1+zz.windowHeight/4);
                                      zz.vertex(squareSize, zz.windowHeight / 2 + zz.windowHeight / 5+zz.windowHeight/4+10);
                                      zz.vertex(0, zz.windowHeight/2+zz.windowHeight/4+30);
                                      zz.endShape();
                                      
                                        zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/10+squareSize2, 0+squareSize3/2);
                                      zz.vertex(zz.windowWidth/10+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/10-20+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/10-20+squareSize2, 0+squareSize3/2);
                                      zz.endShape();
                                      
                                          zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/4+squareSize2, zz.windowHeight/5.8+squareSize3/2);
                                      zz.vertex(zz.windowWidth/4+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/4-18+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/4-18+squareSize2, zz.windowHeight/6.4+squareSize3/2);
                                      zz.endShape();
                                      
                                            zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/2-zz.windowWidth/9+squareSize2, zz.windowHeight/3.0+squareSize3/2);
                                      zz.vertex(zz.windowWidth/2-zz.windowWidth/9+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2-zz.windowWidth/9-16+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2-zz.windowWidth/9-16+squareSize2, zz.windowHeight/3.15+squareSize3/2);
                                      zz.endShape();
                                              
                                      zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/2+squareSize2, zz.windowHeight/2.15+squareSize3/2);
                                      zz.vertex(zz.windowWidth/2+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2-14+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2-14+squareSize2, zz.windowHeight/2.2+squareSize3/2);
                                      zz.endShape();
                                      
                                        zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/12+squareSize2, zz.windowHeight/1.77+squareSize3/2);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/12+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/12-12+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/12-12+squareSize2, zz.windowHeight/1.83+squareSize3/2);
                                      zz.endShape();
                                      
                                          zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/7+squareSize2, zz.windowHeight/1.59+squareSize3/2);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/7+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/7-10+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/7-10+squareSize2, zz.windowHeight/1.61+squareSize3/2);
                                      zz.endShape();
                                      
                                            zz.fill('#E4D6A7');
                                      zz.noStroke();
                                      zz.beginShape();
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/5.5+squareSize2, zz.windowHeight/1.48+squareSize3/2);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/5.5+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/5.5-8+squareSize2, zz.windowHeight);
                                      zz.vertex(zz.windowWidth/2+zz.windowWidth/5.5-8+squareSize2, zz.windowHeight/1.5+squareSize3/2);
                                      zz.endShape();
                                    
                                    }
                                      
                                    zz.keyPressed = function () {
                                      // Check if the 'q' zz.key is pressed
                                      if (zz.key === 'q') {
                                        // Set the 'q' zz.key state to true
                                        isqPressed = true;
                                      }
                                    
                                      // Check if the 'd' zz.key is pressed
                                      if (zz.key === 'd') {
                                        // Set the 'd' zz.key state to true
                                        isdPressed = true;
                                      }
                                        // Check if the 'z' zz.key is pressed
                                      if (zz.key === 'z') {
                                        // Set the 'z' zz.key state to true
                                        iszPressed = true;
                                      }
                                    
                                      // Check if the 's' zz.key is pressed
                                      if (zz.key === 's') {
                                        // Set the 's' zz.key state to true
                                        issPressed = true;
                                      }
                                    }
                                    
                                    zz.keyReleased = function () {
                                      // Check if the 'q' zz.key is released
                                      if (zz.key === 'q') {
                                        // Set the 'q' zz.key state to false
                                        isqPressed = false;
                                      }
                                    
                                      // Check if the 'd' zz.key is released
                                      if (zz.key === 'd') {
                                        // Set the 'd' zz.key state to false
                                        isdPressed = false;
                                      }
                                        // Check if the 'z' zz.key is released
                                      if (zz.key === 'z') {
                                        // Set the 'z' zz.key state to false
                                        iszPressed = false;
                                      }
                                    
                                      // Check if the 's' zz.key is released
                                      if (zz.key === 's') {
                                        // Set the 's' zz.key state to false
                                        issPressed = false;
                                      }
                                    }
                                      
                                                                      };
                                    
                                                                               // Wrap the p5.js sketch with IntersectionObserver
                                                        function initializeSketch12() {
                                                          const observer122 = new IntersectionObserver(entries => {
                                                            entries.forEach(entry => {
                                                                if (entry.target.id === 'hoofdstuk12' && entry.isIntersecting) {
                                                                  hoofdstuk12.isRunning11 = true;
                                                                  console.log('hoofdstuk12 is running');
                                                                } else {
                                                                  hoofdstuk12.isRunning11 = false;
                                                                  console.log('hoofdstuk12 is not running');
                                                                }
                                                              });
                                                            },{
                                                              rootMargin: '-100px'
                                                          });
                                                            const testElement12 = document.getElementById('hoofdstuk12');
                                                                              initializeSketch12();    
                                    
                                                            observer122.observe(testElement12);
                                                        };                                 
                                                        
                                                        
                                                          
                                                        const hoofdstuk12 = new p5(dd, 'hoofdstuk12');
                                                                                        initializeSketch12();    
                                    
                                                                      new p5(dd, 'hoofdstuk12');
                              