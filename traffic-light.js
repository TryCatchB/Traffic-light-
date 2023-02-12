const LIGHT = {
  red: "red",
  yellow: "yellow",
  green: "green",
};

const CLASSES_BY_LIGHT = {
  [LIGHT.red]: "traffic-light_red",
  [LIGHT.yellow]: "traffic-light_yellow",
  [LIGHT.green]: "traffic-light_green",
};

const NEXT_LIGHT_BY_LIGHT = {
  [LIGHT.red]: LIGHT.green,
  [LIGHT.green]: LIGHT.yellow,
  [LIGHT.yellow]: LIGHT.red,
};

let currentLight = LIGHT.red;

function switchLight(node) {
  const currentClass = CLASSES_BY_LIGHT[currentLight];
  const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
  const nextClass = CLASSES_BY_LIGHT[nextLight];

  currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];

  node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
  node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}
