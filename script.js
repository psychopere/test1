var url01 = "assets/aeroplane/scene.gltf";
var url02 = "assets/light_aircraft/scene.gltf";
var url03 = "assets/etrich_taube/scene.gltf";

var ispreviousbuttonclicked = false;
var isnextbuttonclicked = false;

document.getElementById("button1").addEventListener("click", function () {
  // Change the asset when the button is clicked
  var assetEntity = document.getElementById("model_01");
  assetEntity.setAttribute("gltf-model", url03);

  // Swap URLs
  var temp = url03;
  url03 = url02;
  url02 = url01;
  url01 = temp;

  console.log("Button 1 clicked. Model URL: " + assetEntity.getAttribute("gltf-model"));
});

document.getElementById("button2").addEventListener("click", function () {
  // Change the asset when the button is clicked
  var assetEntity = document.getElementById("model_01");
  assetEntity.setAttribute("gltf-model", url02);

  // Swap URLs
  var temp = url01;
  url01 = url02;
  url02 = url03;
  url03 = temp;

  console.log("Button 2 clicked. Model URL: " + assetEntity.getAttribute("gltf-model"));
});
