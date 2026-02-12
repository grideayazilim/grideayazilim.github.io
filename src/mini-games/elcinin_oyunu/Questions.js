import html1 from "./images/html1.png";
import html3 from "./images/html3.png";
import html5 from "./images/html5.png";
import html7 from "./images/html7.png";
import html9 from "./images/html9.png";
import html11 from "./images/html11.png";
import html13 from "./images/html13.png";
import html15 from "./images/html15.png";
import frog from "./images/frog.png";
import lily from "./images/lily.png";
import child from "./images/child.png";
import teddybear from "./images/teddybear.png";
import bee from "./images/bee.png";
import flower from "./images/flower.png";
import pinkbox from "./images/pinkbox.png";
import bluebox from "./images/bluebox.png";
import yellowbox from "./images/yellowbox.png";
import ball from "./images/ball.png";
import cardboard from "./images/cardboard.png";
import rabbit from "./images/rabbit.png";
import darkcardboard from "./images/darkcardboard.png";
import toycar from "./images/toycar.png";

export const Questions = {

    1: {
        id: 1,
        type: "html",
        title: "Select the Glass",
        text: "Write the correct CSS selector to select the glass inside the shelf.",
        figure: {
            type: "image",
            src: html1,
            alt: "html1"
        },
        htmlCode: 
        `<div class="shelf">
          <div class="glass"></div>
          <div class="books"></div>
          <div class="plant"></div>
        </div>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: ".shelf .glass"
    },

    2: {
        id: 2,
        type: "css",
        title: "Move the Frog Right",
        text: "Write the correct CSS code to move the frog to the right.",
        figure: {
            type: "css",
            scene: "flex",
            animation: "flex-end",
            items: [
                {
                    id: "frog",
                    src: frog,
                    alt: "frog",
                    role: "actor"
                },
                {
                    id: "lily",
                    src: lily,
                    alt: "lily",
                    role: "target"
                }
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".container {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected: "justify-content: flex-end;"
    },

    3: {
        id: 3,
        type: "html",
        title: "Select the Book",
        text: "Select the red book on the bookshelf.",
        figure: {
            type: "image",
            src: html3,
            alt: "html3"
        },
        htmlCode: 
        `<div class="bookshelf">
             <div class="book">
                 <div id="red"></div>
                 <div id="yellow"></div>
                 <div id="blue"></div>
             </div>
         </div>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: ".bookshelf .book #red"
    },

    4: {
        id: 4,
        type: "css",
        title: "Center It",
        text: "Center the frog horizontally.",
        figure: {
            type: "css",
            scene: "center",
            animation: "fcenter",
            items: [
                {
                    id: "frog",
                    src: frog,
                    alt: "frog",
                    role: "actor"
                },
                {
                    id: "lily",
                    src: lily,
                    alt: "lily",
                    role: "target"
                }
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".container {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected:"justify-content: center;"
    },

    5: {
        id: 5,
        type: "html",
        title: "First Plate",
        text: "Select the first plate on the table.",
        figure: {
            type: "image",
            src: html5,
            alt: "html5"
        },
        htmlCode:
        `<div class="table">
             <div class="plate"></div>
             <div class="plate"></div>
             <div class="plate"></div>
         </div>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in s CSS selector"
        },
        expected: ".table .plate:first-child"
    },

    6: {
        id: 6,
        type: "css",
        title: "Reach the Toy",
        text: "Help the child reach the toy.",
        figure: {
            type: "css",
            scene: "align",
            animation: "fcenter-y",
            items: [
                {
                    id: "child",
                    src: child,
                    alt: "child",
                    role: "actor"
                },
                {
                    id: "teddybear",
                    src: teddybear,
                    alt: "teddybear",
                    role: "target"
                }
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".container {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected:"align-items: center;"
    },

    7: {
        id: 7,
        type: "html",
        title: "Enter Key",
        text: "Select the Enter key on the keyboard.",
        figure: {
            type: "image",
            src: html7,
            alt: "html7"
        },
        htmlCode: 
        `<div class="keyboard">
             <button>ALT</button>
             <button class="enter">ENTER</button>
             <!--...-->
         </div>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: ".keyboard .enter"
    },

    8: {
        id: 8,
        type: "css",
        title: "Spread the Bees",
        text: "Distribute the bees evenly between the flowers.",
        figure: {
            type: "css",
            scene: "bees",
            animation: "spread",
            items: [
                { id: 1, role: "bee", src: bee },
                { id: 2, role: "bee", src: bee },
                { id: 3, role: "bee", src: bee },

                { id: 4, role: "flower", src: flower },
                { id: 5, role: "flower", src: flower },
                { id: 6, role: "flower", src: flower },
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".garden {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected:"justify-content: space-between;"
    },

    9: {
        id: 9,
        type: "html",
        title: "Last Item",
        text: "Select the last item in the list.",
        figure: {
            type: "image",
            src: html9,
            alt: "html9"
        },
        htmlCode: 
        `<ul>
           <li>Apples</li>
           <li>Bread</li>
           <!--...-->
           <li>Cookies</li>
         </ul>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: "li:last-child"
    },

    10: {
        id: 10,
        type: "css",
        title: "Stack Them",
        text: "Make the boxes stack vertically.",
        figure: {
            type: "css",
            scene: "boxes",
            animation: "column",
            items: [
                { id: 1, role: "box", src: pinkbox },
                { id: 2, role: "box", src: bluebox },
                { id: 3, role: "box", src: yellowbox }
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".container {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected:"flex-direction: column;"
    },

    11: {
        id: 11,
        type: "html",
        title: "Select Images",
        text: "Select only the images inside the box.",
        figure: {
            type: "image",
            src: html11,
            alt: "html11"
        },
        htmlCode: 
        `<div class="box">
             <img src="a.png" />
             <!--...-->
         </div>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: ".box img"
    },

    12: {
        id: 12,
        type: "css",
        title: "Bottom Right Corner",
        text: "Move the ball to the bottom-right corner of the box.",
        figure: {
            type: "css",
            scene: "ball",
            animation: "right-end",
            items: [
                {
                    id: "ball",
                    src: ball,
                    alt: "ball",
                    role: "actor"
                },
                {
                    id: "cardboard",
                    src: cardboard,
                    alt:"cardboard",
                    role: "target"
                }
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".container {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected:"justify-content: flex-end; align-items: flex-end;"
    },

    13: {
        id: 13,
        type: "html",
        title: "Active Menu Item",
        text: "Select the active link in the menu.",
        figure: {
            type: "image",
            src: html13,
            alt: "html13"
        },
        htmlCode: 
        `<nav class="menu">
             <a href="#">Dinner</a>
             <a href="#" class="active">Breakfast</a>
         </nav>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: ".menu a.active"
    },

    14: {
        id: 14,
        type: "css",
        title: "Reverse Order",
        text: "Arrange the items in reverse order.",
        figure: {
            type: "css",
            scene: "row",
            animation: "reverse",
            items: [
                { id: 1, role: "object", src: rabbit },
                { id: 2, role: "object", src: darkcardboard },
                { id: 3, role: "object", src: toycar }
            ]
        },
        editor: {
            mode: "css",
            template: [
                ".container {",
                "    display: flex;",
                "    {{input}}",
                "}"
            ],
            inputPlaceholder: ".........."
        },
        expected:"flex-direction: row-reverse;"
    },

    15: {
        id: 15,
        type: "html",
        title: "Card Title",
        text: "Select the headings inside the card.",
        figure: {
            type: "image",
            src: html15,
            alt: "html15"
        },
        htmlCode: 
        `<div class="card">
             <h2>Cardholder Name</h2>
             <!--...-->
             <p>Sakura</p>
         </div>`,
        editor: {
            mode: "selector",
            template: [
                "{",
                "/* Styles */",
                "}"
            ],
            inputPlaceholder: "Type in a CSS selector"
        },
        expected: ".card h2"
    },

};