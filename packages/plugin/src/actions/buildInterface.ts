import { Body } from '../types/CompilerData';

import createFrame from './createFrame';
import createText from './createText';

const buildInterface = async (json: Body) => {
  console.log("parsed json:\n", json);
  const type       = json.type;
  const descriptor = json.descriptor;
  const params     = json.params;
  const content    = json.body;


  if (descriptor === "TOKEN_INTERFACE") {
    let parent = createFrame(descriptor, params);
    await createText(content, parent);
  }
}

export default buildInterface;