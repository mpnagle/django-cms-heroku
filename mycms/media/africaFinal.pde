//imports geomerative. I'm only using geomerative for its functions
//that make the display of the map better.
import geomerative.*;
import org.apache.batik.svggen.font.table.*;
import org.apache.batik.svggen.font.*;

//Declare global variable for the svg of Africa, the table with the scores,
//the table that relates the names of countries with abbreviations,
RShape mapImage;
//PShape mapImage;
Table data;
Table nameTable;

//Declares the object state in the custom class State
State stateAfrica;
//Declares the array in which the states will be stored
State[] stateArray = new State[100];



//Declare the variables for the min and max values of the values table
//to calibrate the chloropleth function of the map.
float dataMin = MAX_FLOAT;
float dataMax = MIN_FLOAT;

//Declare the variable that sets the number of countries
//based on the number of rows in the data tables.
int rowCount;

//Set the boolean value for ignore styles, which ignores the styles
//set in the SVG in lieu of styles set in processing.
boolean ignoringStyles = false;

//int totalMapChildren;

void setup() {
  //Set and load the font for the sketch.
  PFont font = loadFont("AmericanTypewriter-12.vlw");
  textFont(font);
  
  //set the size of the view window
  size(800,800);
  
  //Initialize geomerative library;
  RG.init(this);
  //Sets ignoreStyles to the boolean value assigned above.
  RG.ignoreStyles(ignoringStyles);
  //Sets polygonizer mode to "adaptative"
  RG.setPolygonizer(RG.ADAPTATIVE);
  
  //Sets mapimage to the SVG file
  mapImage = RG.loadShape("BlankMap-Africa_A_edits.svg");
  //mapImage = loadShape("BlankMap-Africa_A_edits.svg");
  //Use geomerative library to center the image in the display window.
  mapImage.centerIn(g, 20, 1, 1);
  
  //set values of locationTable, nameTable, and data, and rowCount
  //(all using Table class defined in Table.pde
  data = new Table("ibrahim_scores.tsv");
  nameTable = new Table("country_names.tsv");
  rowCount = data.getRowCount();
  
  //set values of dataMin and dataMax with a for loop
  //that goes through all the rows in "scores"
  for (int row = 0; row < rowCount; row++) {
    float value = data.getFloat(row, 1);
    if (value > dataMax) {
      dataMax = value;
    }
    if (value < dataMin) {
      dataMin = value;
    }
  }
  //create the array of states;
  for (int row = 0; row<rowCount; row++) {
    //get the abbreviated code of the state
    String abbrev = data.getRowName(row);
    //load the state from the svg based on the abbrev
    RShape state = mapImage.getChild(abbrev);
    // Sets the variable for the center of each state path
    RPoint stateCenter = state.getCenter();
    //Get the composite score from column 2 of the ibrahim-scores file
    //based on the abbrev passed into function
    float value = data.getFloat(abbrev, 1);
    //Create a new state object with the state information    
    stateAfrica = new State(abbrev, state, value, stateCenter);
    //Put the state object into the array of state objects    
    stateArray[row] = stateAfrica;
  }
  
}

void draw() {
  //Shifts the mapImage to within the view window;
  translate(width/2, height/2);
  
  //Set background color to white;
  background(255);
  
  //smooths the edges of the baseline map
  smooth();
  //Draws the entire Africa map to the display window.
  mapImage.draw();
    
  //Start calling functions
  //Call the function that draws each state with cholorpleth data
  for (int i=0; i<rowCount; i++) { 
    drawData(stateArray[i].state, stateArray[i].value);
  }
  
  /*
  //Call the function that adds the center point of each country,
  //where the text will appear.
  for (int i=0; i<rowCount; i++) {
    drawPoints(stateArray[i].stateCenter);
  }
  */
  
  //Declares variable for mousecoordinates
  RPoint p = new RPoint(mouseX-width/2, mouseY-height/2);
  
  //Create the toggle for mousePressed, which I'll use to show more information.
  boolean showMoreText = false;
  
  
  /*
  //call the function that shows country info if the mouse
  //approaches the country's center
  for (int i=0; i<rowCount; i++) {
    showText(stateArray[i].stateCenter, stateArray[i].value, stateArray[i].abbrev);
  }
  */
  
  for (int i=0; i<rowCount; i++) {
    if(stateArray[i].state.contains(p)){
      highlightState(stateArray[i].state);
      showText(stateArray[i].abbrev, stateArray[i].value);
    }
  }
}


//The function that adds chloropleth data to each country
void drawData(RShape state, float value) {
  //specs for drawing each state's borders
  strokeWeight(.5);
  smooth();
  //ignore svg file styles
  RG.ignoreStyles(true);
  //Find where, proportionally, that value lies between the dataMin and
  //dataMax values
  float percent = norm(value, dataMin, dataMax);
  //Find the color value for the state based on that proportion
  color between = lerpColor(#FFEDA0,#F03B20,percent);
  //Set the color for the state
  fill(between);
  //Draw the state.
  state.draw();
  RG.ignoreStyles(ignoringStyles);
}

/*
//The function that sets the center point of each country
void drawPoints(RPoint stateCenter) {
  //draw an ellipse at each of state centers
  point(stateCenter.x,stateCenter.y);
}
*/

//Show the text of country information if the moust comes near the
//state's center point.
void showText(String abbrev, float value) {
  
  /*
  //sets the coordinates of the state center
  float stateCenterX = stateCenter.x;
  float stateCenterY = stateCenter.y;
  
  */
  
  /*
  //calculates the distance of the mouse to the center, and shows
  //text if it's near.
  if (dist(stateCenterX,stateCenterY, mouseX-width/2, mouseY-height/2) < 5) {
  */
    //fill(255);
    //rect(mouseX-width/2-50, mouseY-height/2-50, 100, 20);
    fill(0);
    float safety = data.getFloat(abbrev, 2);
    float humanrights = data.getFloat(abbrev, 3);
    float econ = data.getFloat(abbrev, 4);
    float humandev = data.getFloat(abbrev, 5);
  
    fill(0);
    textAlign(LEFT);
    String name = nameTable.getString(abbrev,1);
    text(name + "\n" + "Composite Score: " + value + "\nSafety & Rule of Law: " + safety + 
    "\nParticipation & \nHuman Rights: " + humanrights + "\nSustainable & \nEconomic Development: " + 
    econ + "\nHuman Development: " + humandev,width/2-175,-height/2+25);
    
}

void highlightState(RShape state) {
    RG.ignoreStyles(true);
    fill(0,100,255,250);
    state.draw();
    RG.ignoreStyles(ignoringStyles);
}

