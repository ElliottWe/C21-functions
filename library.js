function isTouching(op1,op2) {
    if(op1.x - op2.x < op1.width/2 + op2.width/2 &&
      op2.x - op1.x < op1.width/2 + op2.width/2 && 
      op1.y - op2.y < op1.width/2 + op2.height/2 &&
      op2.y - op1.y < op1.width/2 + op2.height/2){
      op1.shapeColor = "green";
      op2.shapeColor = "green";
      
      }
  else{
    op1.shapeColor = "red";
    op2.shapeColor = "red";
  }
  
  }
  
  function bounceOff(op1, op2){
    if(op1.x - op2.x < op1.width/2 + op2.width/2 &&
      op2.x - op1.x < op1.width/2 + op2.width/2)
      {
      op1.velocityX = op1.velocityX * (-1);
      op2.velocityX = op2.velocityX * (-1);
    
      
      }
  
  
  if( op1.y - op2.y < op1.width/2 + op2.height/2 &&
      op2.y - op1.y < op1.width/2 + op2.height/2){
          op1.velocityY = op1.velocityY * (-1);
          op2.velocityY = op2.velocityY * (-1);
    
      
      }
  }