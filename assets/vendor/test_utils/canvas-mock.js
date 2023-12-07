class CanvasMock {
  constructor (width, height) {
    this.mock = [];
    this.width = width;
    this.height = height;
    this.context = new ContextMock(this.mock);
  }

  getContext (string) {
    this.mock.push('[getContext ' + string + ']')
    return this.context
  }
}
