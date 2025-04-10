let templateFile = await fetch("./component/MovieAdd/template.html");
let template = await templateFile.text();

let MovieAdd = {};

MovieAdd.format = function (handler) {
  let html = template;
  html = html.replace("{{handler}}", handler);
  return html;
};

export { MovieAdd };
