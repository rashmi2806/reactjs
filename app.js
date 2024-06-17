/**
 *  
 * <div id="parent">
 *    <div id="child1">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tage</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>I'm tag h1</h1>
 *        <h2>I'm tag h2</h2>
 *     </div>
 * </div>
 * 
 * ReactElement(object) => HTML(browser understand)
 */
// const heading = React.createElement("h1", {},"Hello world from React!")
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

const parent = React.createElement("div",{id:"parent"},[

  React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")

  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
  ]),
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);