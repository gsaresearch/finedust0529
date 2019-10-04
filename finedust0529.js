let graph = function(g)
{
  let valueX = 0;
  let valueZ = 0;
  let mode = 1;
  let axisZ1, axisZ2, axisZ3, axisZ4, axisZ5;
  let axisX1, axisX2, axisX3;
  let axisY1, axisY2, axisY3;
  
  g.preload = function()
  {
    table = g.loadTable('0529_data.csv');
    map = g.loadImage('map.png');
  };
  
  g.setup = function()
  {
    g.createCanvas(700, 700, g.WEBGL);
    axisZ1 = g.createGraphics(20, 20);
    axisZ1.fill(255);
    axisZ1.textAlign(g.CENTER);
    axisZ1.textSize(13);
    axisZ1.text('60', 10, 10);
    axisZ2 = g.createGraphics(20, 20);
    axisZ2.fill(255);
    axisZ2.textAlign(g.CENTER);
    axisZ2.textSize(13);
    axisZ2.text('80', 10, 10);
    axisZ3 = g.createGraphics(22, 20);
    axisZ3.fill(255);
    axisZ3.textAlign(g.CENTER);
    axisZ3.textSize(13);
    axisZ3.text('100', 10, 10);
    axisZ4 = g.createGraphics(22, 20);
    axisZ4.fill(255);
    axisZ4.textAlign(g.CENTER);
    axisZ4.textSize(13);
    axisZ4.text('120', 10, 10);
    axisZ4 = g.createGraphics(22, 20);
    axisZ4.fill(255);
    axisZ4.textAlign(g.CENTER);
    axisZ4.textSize(13);
    axisZ4.text('120', 10, 10);
    axisZ5 = g.createGraphics(80, 20);
    axisZ5.fill(255);
    axisZ5.textSize(10);
    axisZ5.text('해발고도(m)', 10, 10);
    axisX1 = g.createGraphics(100, 20);
    axisX1.fill(255);
    axisX1.textSize(12);
    axisX1.text('126.840851', 10, 10);
    axisX2 = g.createGraphics(100, 20);
    axisX2.fill(255);
    axisX2.textSize(12);
    axisX2.text('126.845734', 10, 10);
    axisX3 = g.createGraphics(60, 20);
    axisX3.fill(255);
    axisX3.textSize(12);
    axisX3.text('경도(°)', 10, 10);
    axisY1 = g.createGraphics(100, 20);
    axisY1.fill(255);
    axisY1.textSize(12);
    axisY1.text('35.230509', 10, 10);
    axisY2 = g.createGraphics(100, 20);
    axisY2.fill(255);
    axisY2.textSize(12);
    axisY2.text('35.227245', 10, 10);
    axisY3 = g.createGraphics(60, 20);
    axisY3.fill(255);
    axisY3.textSize(12);
    axisY3.text('위도(°)', 10, 10);
    g.frameRate(30);
  };
  
  g.draw = function()
  {
    g.background(0);
    g.rotateX(valueX);
    g.rotateZ(valueZ);
    g.translate(0, 0, -150);
    
    g.push();
      g.texture(map);
      g.plane(300);
    g.pop();
    
    g.push();
      g.stroke(255);
      g.noFill();
      g.translate(0, 0, 150);
      g.box(300,300,300);
      g.box(300,300,100);
    g.pop();
    
    let row;
    if(mode === 1)
    {
      for(let l = 1; l < table.getRowCount(); l++)
      {
        g.push();
          row = table.getRow(l);
          pointhue = row.getString(1);
          latitude = -(row.getString(2)-35.230509)*91911.764 - 150;
          hight = row.getString(3)*5 -60;
          longitude = (row.getString(4)-126.840851)*61437.640 -100;
          g.noStroke();
          g.colorMode(g.HSB);
          g.fill(255-10*pointhue, 255, 255);
          g.translate(longitude, latitude, hight);
          g.sphere(3);
        g.pop();
      }
    }
    if(mode === 2)
    {
      l = g.int(g.frameCount/15) % table.getRowCount();
      
      g.push();
        row = table.getRow(l);
        pointhue = row.getString(1);
        latitude = (row.getString(2)-35.230509)*91911.764 +100;
        hight = row.getString(3)*5 -60;
        longitude = (row.getString(4)-126.840851)*61437.640 -100;
        g.noStroke();
        g.colorMode(g.HSB);
        g.fill(255-10*pointhue, 255, 255);
        g.translate(longitude, latitude, hight);
        g.sphere(3);
      g.pop();
    }
  
    g.push();
      g.translate(-140, 150, 2);
      g.rotateX(80);
      g.texture(axisZ1);
      g.plane(20, 20);
    g.pop();
    g.push();
      g.translate(-140, 150, 102);
      g.rotateX(80);
      g.texture(axisZ2);
      g.plane(20, 20);
    g.pop();
    g.push();
      g.translate(-140, 150, 202);
      g.rotateX(80);
      g.texture(axisZ3);
      g.plane(20, 20);
    g.pop();
    g.push();
      g.translate(-140, 150, 302);
      g.rotateX(80);
      g.texture(axisZ4);
      g.plane(20, 20);
    g.pop();
    g.push();
      g.translate(-140, 150, 320);
      g.rotateX(80);
      g.texture(axisZ5);
      g.plane(80, 20);
    g.pop();
    g.push();
      g.translate(-110, 150, -10);
      g.rotateX(80);
      g.texture(axisX1);
      g.plane(100, 20);
    g.pop();
    g.push();
      g.translate(190, 150, -10);
      g.rotateX(80);
      g.texture(axisX2);
      g.plane(100, 20);
    g.pop();
    g.push();
      g.translate(40, 150, -30);
      g.rotateX(80);
      g.texture(axisX3);
      g.plane(60, 20);
    g.pop();
    g.push();
      g.translate(-165, -150, 0);
      g.rotateX(80);
      g.texture(axisY1);
      g.plane(100, 20);
    g.pop();
    g.push();
      g.translate(-165, 150, 0);
      g.rotateX(80);
      g.texture(axisY2);
      g.plane(100, 20);
    g.pop();
    g.push();
      g.translate(-170, 0, 0);
      g.rotateX(80);
      g.texture(axisY3);
      g.plane(60, 20);
    g.pop();
  };
  
  g.mouseDragged = function()
  {
    valueX = g.mouseY*0.01;
    valueZ = g.mouseX*0.01;
  };
  
  g.keyTyped = function()
  {
    if(g.key === '1')
    {
      mode = 1;
    }
    if(g.key === '2')
    {
      mode = 2;
    }
  };
};
let modeling = new p5(graph);

let info = function(i)
{
  i.setup = function()
  {
    i.createCanvas(300, 700);
    i.background(0);
    
    i.textSize(20);
    i.fill(255);
    i.text('Color - Fine dust concentration', 10, 30);
    i.text('(㎍/㎥)', 230, 70);
    i.text('0', 10, 85);
    i.text('10', 10, 281);
    i.text('20', 10, 477);
    i.text('25.5', 10, 585);
    
    i.noStroke();
    i.colorMode(i.HSB);
    let f, r;
    for(f = 0; f < 500; ++f)
    {
      i.stroke(255 - f/2, 255, 255);
      i.line(50, f+80, 255, f+80);
    }
  };
};
let showinfo = new p5(info);
