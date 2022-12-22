const input = process.argv[2];

const commands = input.split(/([L,R]|[W][\d]*)/).filter(n => n);

let directionState = 0;
const position = {
  x: 0,
  y: 0
};

function convertAngle(deg) {
  return ((deg + 360) % 360);
}

function convertAngleToDirection(deg) {
  switch(deg) {
    case 0:
      return 'North';
      break;
    case 90: 
    return 'East';
      break;
    case 180: 
    return 'South';
      break;
    case 270: 
    return 'West';
      break;
  }
}

commands.forEach((command, idx) => {
  switch(command.charAt(0)) {
    case 'L':
      directionState = convertAngle(directionState - 90);
      break;
    case 'R':
      directionState = convertAngle(directionState + 90);
      break;
    case 'W':
      const step = Number(command.substring(1));

      switch(directionState) {
        case 0:
          position.y += step
          break;
        case 90: 
          position.x += step
          break;
        case 180: 
          position.y -= step
          break;
        case 270: 
          position.x -= step
          break;
      }
      break;
  }
});

console.log(`X: ${position.x} Y: ${position.y} Direction: ${convertAngleToDirection(directionState)}`);