var url01 = "assests/aeroplane/scene.gltf";
var url02 = "assests/light_aircraft/scene.gltf";
var url03 = "assests/etrich_taube/scene.gltf";

document.getElementById("button1").addEventListener("click", function () {
  url01 = url02;
  url02 = url03;
  url03 = url01;
  // Change the asset when the button is clicked
  var assetEntity = document.getElementById("model_01");
  assetEntity.setAttribute("gltf-model", url01);
});
