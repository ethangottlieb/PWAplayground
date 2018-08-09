function tick() {
  var name = "";
  var time = new Date().toLocaleTimeString();
  console.log(time);
  console.log(time.charAt(12) % 2);
  if (time.charAt(12) % 3 == 0)
      {
      name = "Johan";
      }
      else if (time.charAt(12) % 3 == 1)
      {
      name= "Ethan";
      }
            {
      name= "Jeff";
      }
        var text = document.getElementById('root').textContent;
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {name} {text}.</h2>
    </div>
  );

  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
