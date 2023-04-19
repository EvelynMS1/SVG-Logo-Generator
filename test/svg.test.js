//Create test for svg logo 
//require svg file 
//call function that is being tested from svg file
const  {Triangle,Square,Circle} = require('../lib/shape.js');


//test each shape function
describe('svgShapes', () => {
    describe('circle', () => {
        it('Should take in user inputs for text, color of text and color of shape',()=>{
          const color= "blue"; 
          const textcolor = "yellow";
          const text = "ems";
          const shapesvg =`<circle cx="150" cy="100" r="80" fill='${color}'/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
         const shape = new Circle();
         shape.setColor(color);
         shape.settextcolor(textcolor);
        shape.settext(text);
         expect(shape.render()).toEqual(shapesvg);   
        });

    });

    describe('triangle', () => {
        it('Should take in user inputs for text, color of text and color of shape',()=>{
          const color= "yellow"; 
          const textcolor = "orange";
          const text = "ems";
          const shapesvg =`<polygon points="20,180 150,20 280,180 " fill='${color}' /><text x="150" y="130" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
         const shape = new Triangle();
         shape.setColor(color);
         shape.settextcolor(textcolor);
         shape.settext(text);
         expect(shape.render()).toEqual(shapesvg);   
        });

    });
    describe('Square', () => {
        it('Should take in user inputs for text, color of text and color of shape',()=>{
          const color= "yellow"; 
          const textcolor = "purple";
          const text = "ems";
          const shapesvg =`<rect x="20" y="20" width="160" height="160" fill='${color}' /><text x="100" y="110" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
         const shape = new Square();
         shape.setColor(color);
         shape.settextcolor(textcolor);
         shape.settext(text);
         expect(shape.render()).toEqual(shapesvg);   
        });

    });
}); // expect(.toEqual());

