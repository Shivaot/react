const pi = 3.14;
const side = 10;

var areaOfCircle = (radius) => pi*radius*radius;
var areaOfSquare = () => side*side;
var areaOfCylinder = (height,radius) =>  2*pi*radius*(radius+height);

export {areaOfCircle,areaOfSquare,areaOfCylinder};