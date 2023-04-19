//function of inquirer
//variable storing prompt questions as array of objects
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shape");
const fs = require('fs');
const questions = [
  {
    name: "logoText",
    message: `Please type desired characters for logo no more than 3:
        `,
    type: "input",
  },
  {
    name: "logoTextColor",
    message: `Please specify the color for logo text either as a color keyword or hexadecimal number
        :`,
    type: "input",
  },
  {
    name: "logoShape",
    message: `What shape would you like for the logo?`,
    type: "rawlist",
    //array of object as options
    choices: [ "Circle", "Triangle", "Square"],
  },
  {
    name: "logoShapeColor",
    message:
      "Please specify the desired color for logo shape as a color keyword or hexadecimal",
    type: "input",
  },
];
//create file svg function
function createSVGfile(filename, svgContent) {
  return fs.writeFile(filename, svgContent, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

function svgUserRes() {
  inquirer.prompt(questions).then((answers) => {
    let shape;
    if(answers.logoShape === 'Circle'){
        shape = new Circle;
    }else if(answers.logoShape === 'Triangle'){
        shape = new Triangle;
    }else{
        shape = new Square;
    }
    shape.setColor(answers.logoShapeColor);
    shape.settextcolor(answers.logoTextColor);
    shape.settext(answers.logoText);
    const svg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
   </svg> `;
   createSVGfile("logo.svg",svg);
    //createSVGfile("Createdlogo.svg", logoShape(answers));
    console.log(answers);
  });
}

svgUserRes();

