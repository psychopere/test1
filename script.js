var url01 = "assests/aeroplane/scene.gltf";
var url02 = "assests/light_aircraft/scene.gltf";
var url03 = "assests/etrich_taube/scene.gltf";
var i = 1;

document.getElementById("button1").addEventListener("click", function () {
  // Change the asset when the button is clicked
  var assetEntity = document.getElementById("model_01");
  assetEntity.setAttribute("gltf-model", url01);
  ispreviousbuttonclicked = true;
});

document.getElementById("button2").addEventListener("click", function () {
  // Change the asset when the button is clicked
  var assetEntity = document.getElementById("model_01");
  assetEntity.setAttribute("gltf-model", url03);
  isnextbuttonclicked = true;
});

if (ispreviousbuttonclicked) {
  var temp = url03;
  url03 = url02;
  url02 = url01;
  url01 = temp;
} else if (isnextbuttonclicked) {
  var temp = url01;
  url01 = url02;
  url02 = url03;
  url03 = temp;
}
