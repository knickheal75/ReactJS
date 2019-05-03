"use strict";

var count = false;
var showDetail = function showDetail() {
  count = !count;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: showDetail },
      count ? "Hide Details" : "Show Details"
    ),
    React.createElement(
      "p",
      null,
      count ? "Hello,now you can see the details" : ""
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
