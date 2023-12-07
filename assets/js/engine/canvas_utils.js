const canvas = document.getElementById("GLCanvas");
const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

function initializeGl() {
  if (gl) {
    gl.clearColor(0.0, 0.8, 0.0, 1.0);

    initSquareBuffer();
    initSimpleShader("VertexShader", "FragmentShader");
  } else {
    document.write("<br><b>WebGL is not supported!</b>");
  }
}

function drawSquare() {
  if (!gl)
    throw new Error("clearCanvas: canvas gl context undefined.");

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(simpleShader);
  gl.enableVertexAttribArray(shaderVertexPositionAttribute);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function doGlDraw() {
  initializeGl();
  drawSquare();
}
