function bounceOff(body1,body){

    if (body1.x - body.x < body.width/2 + body1.width/2
      && body.x - body1.x < body.width/2 + body1.width/2) {
    body1.velocityX = body1.velocityX * (-1);
    body.velocityX = body.velocityX * (-1);
  }
  if (body1.y - body.y < body.height/2 + body1.height/2
    && body.y - body1.y < body.height/2 + body1.height/2){
    body1.velocityY = body1.velocityY * (-1);
    body.velocityY = body.velocityY * (-1);
  }
  
    
  }