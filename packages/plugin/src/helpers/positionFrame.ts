import { computeBoundingBox } from '@create-figma-plugin/utilities'

// function intersect(l1: SceneNode, l2: SceneNode): boolean {
//   const l1BoundingBox = computeBoundingBox(l1)
//   const aMinX = l1BoundingBox.x
//   const aMaxX = l1BoundingBox.x + l1BoundingBox.width
//   const aMinY = l1BoundingBox.y
//   const aMaxY = l1BoundingBox.y + l1BoundingBox.height

//   const l2BoundingBox = computeBoundingBox(l2);
//   let bMinX = l2BoundingBox.x;
//   let bMaxX = l2BoundingBox.x + l2BoundingBox.width;
//   let bMinY = l2BoundingBox.y;
//   let bMaxY = l2BoundingBox.y + l2BoundingBox.height;

//   return ((bMinX <= aMaxX)
//     || (bMinX <= aMaxX))
//     && ((bMinY >= aMinY)
//       || (bMaxY <= aMaxY))
// }

let previousChild: FrameNode

const positionFrame = (frame: FrameNode): void => {
  const children = figma.currentPage.children;
  const selectedList = figma.currentPage.selection;
  const selected = selectedList[selectedList.length -1];
  console.log(children);

  if (children.length <= 1) {
    frame.x = 0;
    frame.y = 0;
    previousChild = frame;
    return;
  }

  if (children.length > 0) {
    frame.y = previousChild.y
    frame.x = previousChild.x + previousChild.width + 40
    console.log("previous: ", previousChild.x, previousChild.y, previousChild.width, children.indexOf(previousChild));
  }

  previousChild = frame;
}

export default positionFrame;