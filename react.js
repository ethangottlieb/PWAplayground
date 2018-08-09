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
      document.getElementById('square').style.color = "blue";
      document.getElementById('square').style.fillOpacity = 1;
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
  //ReactDOM.render(gameBoard, document.getElementById('square'));
    }
setInterval(tick, 1000);

function ethanClickFunction(){
    console.log("fuck yeah");
    window.location.href="phising.html";
}