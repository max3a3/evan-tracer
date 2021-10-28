window.onload = function () {
  gl = null;
  error = document.getElementById("error");
  canvas = document.getElementById("canvas");
  try {
    gl = canvas.getContext("experimental-webgl");
  } catch (e) {}

  if (gl) {
    error.innerHTML = "Loading...";

    // keep track of whether an <input> is focused or not (will be no only if inputFocusCount == 0)
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onfocus = function () {
        inputFocusCount++;
      };
      inputs[i].onblur = function () {
        inputFocusCount--;
      };
    }

    material = parseInt(document.getElementById("material").value, 10);
    environment = parseInt(document.getElementById("environment").value, 10);
    ui = new UI();
    ui.setObjects(makeSphereColumn());
    var start = new Date();
    error.style.zIndex = -1;
    setInterval(function () {
      tick((new Date() - start) * 0.001);
    }, 1000 / 60);
  } else {
    error.innerHTML =
      'Your browser does not support WebGL.<br>Please see <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">Getting a WebGL Implementation</a>.';
  }
};
