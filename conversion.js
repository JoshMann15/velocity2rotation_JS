  function radians_to_degrees(radians)
  {
    var pi = Math.PI;
    return radians * (180/pi);
  }
  
  
  angle = radians_to_degrees(Math.atan2(x.velocityX, x.velocityY));
  if (angle > 0) {
    console.log(angle * -1);
    x.rotation = angle * -1;
  } else {
    console.log(angle * -1);
    x.rotation = angle * -1;
  }
