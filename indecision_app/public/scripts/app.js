"use strict";

var app = {
  appName: "Indecison",
  subTitle: "just an app",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);

    e.target.elements.option.value = "";
    render();
  }
};

var wipeArray = function wipeArray() {
  app.options = [];
  render();
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.appName
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "here are your options" : "no options"
  ),
  React.createElement(
    "p",
    null,
    app.options.length
  ),
  React.createElement(
    "button",
    { onClick: wipeArray },
    "Remove All"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "item one"
    ),
    React.createElement(
      "li",
      null,
      "item two"
    )
  ),
  React.createElement(
    "form",
    { onSubmit: onFormSubmit },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "ADD OPTION"
    )
  )
);

var appRoot = document.getElementById("app");

var numbers = [33, 55, 88];

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.appName
    ),
    app.subTitle && React.createElement(
      "p",
      null,
      app.subTitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "here are your options" : "no options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: wipeArray },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "ADD OPTION"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
