let simpleShader = null;
let shaderVertexPositionAttribute = null;

function loadAndCompileShader(id, shaderType) {
  let shaderText, shaderSource, compiledShader;

  shaderText = document.getElementById(id);
  shaderSource = shaderText.firstChild.textContent;

  compiledShader = gl.createShader(shaderType);

  gl.shaderSource(compiledShader, shaderSource);
  gl.compileShader(compiledShader);

  if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
    console.error("A shader compiling error occurred: " +
      gl.getShaderInfoLog(compiledShader));
  }

  return compiledShader;
}

function initSimpleShader(vertexShaderID, fragmentShaderID) {
  const vertexShader = loadAndCompileShader(vertexShaderID, gl.VERTEX_SHADER);
  const fragmentShader = loadAndCompileShader(fragmentShaderID,
    gl.FRAGMENT_SHADER);

  simpleShader = gl.createProgram();
  gl.attachShader(simpleShader, vertexShader);
  gl.attachShader(simpleShader, fragmentShader);
  gl.linkProgram(simpleShader);

  if (!gL.getProgramParameter(simpleShader, gL.LINK_STATUS))
    console.error("Error linking shader");

  shaderVertexPositionAttribute = gl.getAttribLocation(simpleShader,
    "aSquareVertexPosition");

  gl.bindBuffer(gl.ARRAY_BUFFER, shaderVertexPositionAttribute);
  gl.vertexAttribPointer(shaderVertexPositionAttribute,
    3,
    gl.FLOAT,
    false,
    0,
    0);
}
