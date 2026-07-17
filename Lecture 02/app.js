const element = React.createElement("h1", {id : "fullname", className : "header", style : {backgroundColor : "blue", color : "pink", fontSize : "30px"}}, "Name : Sujay Singh");
const element2 = React.createElement("h2", {id : "rollNo", className : "header", style : {backgroundColor : "black", color : "pink", fontSize : "25px"}}, "Roll No : 97");
const div1 = React.createElement("div", {}, [element, element2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
// root.render(element2);
root.render(div1);