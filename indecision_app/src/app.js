const app = {
  appName: "Indecison",
  subTitle: "just an app",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);

    e.target.elements.option.value = "";
    render();
  }
};

const wipeArray = () => {
  app.options = [];
  render();
};

const template = (
  <div>
    <h1>{app.appName}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}

    <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>

    <p>{app.options.length}</p>

    <button onClick={wipeArray}>Remove All</button>

    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>

    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>ADD OPTION</button>
    </form>
  </div>
);

const appRoot = document.getElementById("app");

const numbers = [33, 55, 88];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.appName}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}

      <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>

      <button onClick={wipeArray}>Remove All</button>

      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>ADD OPTION</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
