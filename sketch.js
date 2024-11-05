function setup() {
  createCanvas(windowWidth,windowHeight );//產生畫布
  //background(0)  //黑色背景
  background("#caf0f8") //設定背景顏色(天空色)
}

function draw() { //畫圖，每秒會畫60次
  //background(220); //背景顏色，灰白色(0黑色~255白色)
  background("#caf0f8") //設定背景顏色(天空色)
  noFill()  //以下所畫的物件不要充滿顏色
  stroke("#023e8a")  //線條的顏色
  strokeWeight(5) //線條的粗細
  ellipse(25,25,50)  //在座標(x:25,y:25)畫一個直徑為50的圓
  
}
