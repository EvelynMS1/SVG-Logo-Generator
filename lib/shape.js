
// //object data from user response to prompts
// const logoInfo = (data);

// //functions for creating shapes circle,triangle,square (size 300x200) depending on the user selection
// const createCircle = function{
//     setAttribute("cx","0")
// "cy","0"
// "r", "150"
// //return circle
// };

// //using polygon formula 
// const createTriangle = function{
// //bottomleft  Middle top bottom right
// (0,200)(150,0)(300,200)
// //return traingle
// };


// const createSquare = function{<rect x="0" y="0" width="300" height="200"/>
// //return square
// };

// //using link for svg 
// const shapeCreated = function(document.createElementNS("http://http://www.w3.org/2000/svg",${logoInfo})){
//     //add color to x shape and color to x text

// //centering of text for shape

// };
// const shapeColor = function(//call shape function return )
// dependingOnCurrentshape = data.colorshape;
// dependingOnCurrentshape = data.textcolor;
// x="100"
// y="100"  
// //function to verify shape
// const shapeVer = function(data.arraylogoshape.keychoices.namekey){
// // if (name == circle)
// // run circle function
// // else if (name == traingle)
// // run traingle function
// // else if (name == square)
// // run square function

// };
// class shapecreator = (shapeVerReturn,Color,Text,textcolor){
  
//  }


// new shapecreator = (data.shape,data.color,data.text,data.textcolor)


class Shape{
    constructor(){
        this.color = '';
        this.textcolor = '';
        this.text = '';
    }
    setColor(color){
        this.color = color;

    }
    settextcolor(textcolor){
        this.textcolor = textcolor;
    }
    settext(text){
        this.text = text;
    }

}

class Triangle extends Shape{
    render(){
        return `<polygon points="20,180 150,20 280,180 " fill='${this.color}' /><text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill='${this.color}'/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="20" y="20" width="160" height="160" fill='${this.color}' /><text x="100" y="110" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
    }
}
module.exports = {Triangle,Square,Circle};

//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

//300 200 20 on each side
