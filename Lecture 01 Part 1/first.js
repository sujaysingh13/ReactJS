// const header1 = document.createElement("h1");
// header1.innerHTML = "Name : Sujay Singh";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement("h2");
// header2.innerHTML = "Branch : CSE";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "25px";
// header2.style.color = "white";

// const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);


// React : Object
// ReactDOM : Object

const React = {
    createElement : function(tag, styles, children) {
        const element = document.createElement(tag);

        if(typeof children === "object") {
            for(let val of children) {
                element.append(val);
            }
        }
        else
            element.innerHTML = children;

        for(let key in  styles) {
            element.style[key] = styles[key];
        }
        return element;
    }
}

const ReactDOM = {
    render : function(element, root) {
        root.append(element);
    }
}

const header1 = React.createElement("h1", {backgroundColor : "blue", fontSize : "30px", color : "white"}, "Name : Sujay Singh");
const header2 = React.createElement("h2", {backgroundColor : "black", fontSize : "25px", color : "white"}, "Roll No : 97");

// Unordered List
// HTML
// CSS
// JS

const list1 = React.createElement("li", {}, "HTML");
const list2 = React.createElement("li", {}, "CSS");
const list3 = React.createElement("li", {}, "JS");

const unorderedList = React.createElement("ul", {backgroundColor : "blue", fontSize : "30px", color : "white"}, [list1, list2, list3]);


ReactDOM.render(header1, document.getElementById("root"));
ReactDOM.render(header2, document.getElementById("root"));
ReactDOM.render(unorderedList, document.getElementById("root"));