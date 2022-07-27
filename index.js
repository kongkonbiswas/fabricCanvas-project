// fabric.Image.fromURL("https://www.w3schools.com/w3css/img_lights.jpg", (img) => {
//     canvas.backgroundImage = img
//     canvas.renderAll()
// });

// const initCanvas = (id) => {
//     return new fabric.Canvas( id,{
//         width: 500,
//         height: 500
//     });
// }

// const setBackground =( url, canvas) => {
//     fabric.Image.fromURL(url, (img) => {
//         canvas.backgroundImage = img
//         canvas.renderAll()
//     })
// }
// const canvas = initCanvas('canvas');

// setBackground("https://www.w3schools.com/w3css/img_lights.jpg", canvas);

// mouse: over
// canvas.on("mouse:over")
// Image Upload
// document.getElementById('imgLoader').onchange = function handleImage(e) {
//     var reader = new FileReader();
//     reader.onload = function (event){
//         var imgObj = new Image();
//         imgObj.src =event.target.result;
//         imgObj.onload = function(){
//             var image = new fabric.Image(imgObj);
//             image.set({
//                 angle: 0,
//                 padding: 10,
//                 height: 110,
//                 cornersize: 10,
//                 width: 110,
//             });
//             canvas.centerObject(image);
//             canvas.add(image);
//             canvas.renderAll();
//         }
//     }
//     reader.readAsDataURL(e.target.files[0]);
// }

// var canvas = new fabric.Canvas('canvas');
// canvas.setHight(480);
// canvas.setWidth(640);

// $('#uploadedImg").change(function(){
//     var imgData = $(this).files[0];
//     fabric.util.loadImge(imgData, function(img){
//         var oImg = new Fabric.Image(img);
//         oImg.scale(0.2).set({
//             left: 100,
//             top:100,
//         });
//         canvas.add(oImg);
//     });
// });