import Prototype from "../interface/Prototype";
import Shape from "../interface/Shape";

export default class Group implements Prototype, Shape {
  private shapes = new Array<Prototype | Shape>();

  add(shape: Prototype | Shape): this {
    this.shapes.push((shape as Prototype).copy());
    return this;
  }

  copy(): this {
    const result = new Group();
    this.shapes.forEach((shape) => {
      result.shapes.push(shape);
    });
    return result as this;
  }

  //애니메이션
  getShapes() {
    return this.shapes;
  }

  draw(canvas: HTMLCanvasElement): this {
    this.shapes.forEach((shape) => {
      (shape as Shape).draw(canvas);
    });
    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this.shapes.forEach((shape) => {
      (shape as Shape).moveOffset(dx, dy);
    });
    return this;
  }
}
