import Group from "./models/Group";
import Line from "./models/Line";
import Point from "./models/Point";

document.body.innerHTML += `<canvas width="600" height="600" style="border: 1px dashed grey"></canvas>`;

const domCanvas = document.querySelector("canvas");

const pt1 = new Point(100, 100);
pt1.draw(domCanvas);

const pt2 = new Point(200, 100);
pt2.draw(domCanvas);

const line1 = new Line(pt1, pt2);
line1.draw(domCanvas);

const pt3 = new Point(200, 200);
const pt4 = new Point(100, 200);

const line2 = new Line(pt2, pt3);
const line3 = new Line(pt3, pt4);
const line4 = new Line(pt4, pt1);

const rect = new Group();
rect.add(line1).add(line2).add(line3).add(line4);

rect.draw(domCanvas);

const cloneRect = rect.copy();
cloneRect.moveOffset(200, 200);
cloneRect.draw(domCanvas);

// 에니메이션
let dx = Math.random() * 2; // x 방향 이동 속도
let dy = Math.random() * 2; // y 방향 이동 속도

function animate() {
  if (!domCanvas) return;
  const ctx = domCanvas.getContext("2d");
  if (!ctx) return;

  // 캔버스 클리어
  ctx.clearRect(0, 0, domCanvas.width, domCanvas.height);

  // 원본 사각형 그리기
  rect.draw(domCanvas);

  // 복제된 사각형 이동 및 그리기
  cloneRect.moveOffset(dx, dy);

  // 경계 체크 및 방향 전환
  const bounds = getBounds(cloneRect);
  if (bounds.right > domCanvas.width || bounds.left < 0) dx = -dx;
  if (bounds.bottom > domCanvas.height || bounds.top < 0) dy = -dy;

  requestAnimationFrame(animate);
}

// 그룹의 경계를 계산하는 헬퍼 함수
function getBounds(group: Group) {
  let minX = Infinity,
    minY = Infinity;
  let maxX = -Infinity,
    maxY = -Infinity;

  group.getShapes().forEach((shape) => {
    if (shape instanceof Point) {
      minX = Math.min(minX, shape.getX());
      maxX = Math.max(maxX, shape.getX());
      minY = Math.min(minY, shape.getY());
      maxY = Math.max(maxY, shape.getY());
    } else if (shape instanceof Line) {
      // Line의 시작점과 끝점 모두 체크
      const start = shape.getPt1();
      const end = shape.getPt2();

      minX = Math.min(minX, start.getX(), end.getX());
      maxX = Math.max(maxX, start.getX(), end.getX());
      minY = Math.min(minY, start.getY(), end.getY());
      maxY = Math.max(maxY, start.getY(), end.getY());
    }
  });

  return {
    left: minX,
    right: maxX,
    top: minY,
    bottom: maxY,
  };
}

// 애니메이션 시작
animate();
