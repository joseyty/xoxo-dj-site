


  function clicarButton1() {

    console.log("Botão clicado");
    
    const music1 = document.getElementById("music1");
    const music2= document.getElementById("music2");
    const music3 = document.getElementById("music3");
    const music4 = document.getElementById("music4");
    const music5 = document.getElementById("music5");


  music1.play();

  music1.addEventListener("ended", () => {
    music2.play();
  });
    music2.addEventListener("ended", () => {
    music3.play();
  });
    music3.addEventListener("ended", () => {
    music4.play();
  });
    music4.addEventListener("ended", () => {
    music5.play();
  });
    music5.addEventListener("ended", () => {
    music1.play();
  });
    
  } 

    document.getElementById("clicarButton1")
    .addEventListener("click", clicarButton1);
  