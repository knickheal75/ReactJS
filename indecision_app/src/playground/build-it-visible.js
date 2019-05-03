let count = false;
const showDetail = () => {
  count = !count;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetail}>
        {count ? "Hide Details" : "Show Details"}
      </button>
      <p>{count ? "Hello,now you can see the details" : ""}</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
