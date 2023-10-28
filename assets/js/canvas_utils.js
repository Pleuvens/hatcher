const canvas = document.getElementById("GLCanvas");
const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

function clearCanvas() {
  if (!gl)
    throw new Error("clearCanvas: canvas gl context undefined.");
  gl.clearColor(0.0, 0.8, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

clearCanvas();
