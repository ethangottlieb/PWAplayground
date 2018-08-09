function tick() {
  var name = "";
  var time = new Date().getSeconds();
  console.log(time);
  if (time % 3 == 0)
      {
      name = "Johan";
      }
      else if (time % 3 == 1)
      {
      name= "Ethan";
      }
      else
        {
      name= "Jeff";
      }
  const element = React.createElement('h1', null, name);

  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
