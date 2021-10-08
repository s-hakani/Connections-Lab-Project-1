//adapted from Allison Parish's walk through here 
// https://creative-coding.decontextualize.com/changes-over-time/

// STUCK HERE: If i click on the prayer gallery first, I have to hard reload to clear it!! What is that about?! 

// this is from me testing out why the backgrounds are keeping their history and drawing on top of each other! still haven't figured this out... 
let origC1, origC2, origN, origNewC, c1, c2, n, newc, myCanvas;

let prayerArray = [
  "I pray that I get a supporting and loving dog this year.", 
  "I pray that my grandma's flight goes well.",
  "I pray that I find a TV for cheap.",
  "I pray I find more time with my daughter.",
  "I want to travel more!",
  "I pray that my mom's travels don't make her knee pain worse and she has peace of mind.",
  "My son just started a job, and I pray that he continues to feel motivation and joy in it.",
  "I want to maintain my health for the rest of my life and stay out of the hospital.",
  "I want to go to sleep soon and stay asleep for a whole night!",
  "I'm praying for unity in my family."
]


// create global variables that allow me to make my random function move slower 
let timeLastUpdated = Date.now()
const TIME_BETWEEN_RANDOMIZATIONS = 1000; // milliseconds between new randoms


function setup() {
  let myCanvas = createCanvas(window.innerWidth,window.innerHeight);

	//Set the parent of the canvas to an exisitng html element's id value 

	myCanvas.parent("canvas-container");
  origC1 = color(255);
  origC2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    origN = map(y,0,height,0,1);
    origNewC = lerpColor(origC1,origC2,origN);
    stroke(origNewC);
    line(0,y,width, y);
  }
}

// *** TO-DO: Fix: something is off with the lerp - the gradient is drawing on top of the other gradients, but the clear is working with the final sketch where I am starting over. 

function draw() {
  colorMode(HSB, 100);
  // Home page dots moving sketch
  if (pageNumber == -1) {
    // *** TO-DO: How to make the path that the circles follow fade as the sketch continues? 
    for (let i = 0; i < 10; i++) {
      fill(frameCount % 255);
      ellipse(
        (window.innerWidth/2)+(sin(frameCount/(i+15))*(window.innerWidth/8)),
        210+(i*50),
        60,
        60);
      }
    }
  
  // About page & Submit page background 

  // Moving these also inside of the script.js rather than within this draw loop 

  // if (pageNumber == 0) {
  //   // clear();
  //   c1 = color(255);
  //   c2 = color(60, 40, 90);
  
  //   for(let y=0; y<height; y++){
  //     n = map(y,0,height,0,1);
  //     newc = lerpColor(c1,c2,n);
  //     stroke(newc);
  //     line(0,y,width, y);
  //       } 
  //   }

  // if (pageNumber == 1) {
  //   // clear();
  //   c1 = color(255);
  //   c2 = color(30, 40, 90);
  
  //   for(let y=0; y<height; y++){
  //     n = map(y,0,height,0,1);
  //     newc = lerpColor(c1,c2,n);
  //     stroke(newc);
  //     line(0,y,width, y);
  //       } 
  //   }

  // Prayer gallery sketch - This is not running as it is on the p5.js sketch 
  // https://preview.p5js.org/shakani/present/C5dBiKZ6N
  // Basically, the if statement is running one time (one prayer is displaying) - I think this is because its linked to us selecting button i=2 here - So the if within the if is making it run one time. Need to come back to this and debug. 
  // Also want to play with animating the text to have it flowing more (time permitting)

  if (pageNumber == 2) {
    colorMode(RGB);

    //Clearing the old gradient background 
    //This clear doesn't seem to be clearing the other buttons, something about the gradient is building from each button.
    // clear(); - Need to run this AFTER the button gets clicked

    // Soothing color 
    // background("lavender");

    let arrayLength = prayerArray.length;
    let randomPrayer = (Math.floor(random(0,arrayLength)));
    

    // in the p5 code, background is in set up 
    textSize(24);
    noStroke();
    fill(random(80),random(80),random(200), 70);
    if (Date.now() - timeLastUpdated > TIME_BETWEEN_RANDOMIZATIONS) {
      text(prayerArray[randomPrayer], random(window.innerWidth)-300, random(window.innerHeight));
    timeLastUpdated = Date.now();
    }


    }
}
