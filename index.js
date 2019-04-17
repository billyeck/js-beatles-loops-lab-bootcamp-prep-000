// add solution here
var a=[];
function theBeatlesPlay(musicians, instruments){
  for (var i=0; i<musicians.length; i++){
    a.push(musicians[i]+" plays "+instruments[i]);
  }
  return a;
}

function johnLennonFacts(trivia){
  var b=0;
  while (b<trivia.length){
    trivia[b]=trivia[b]+"!!!"
    b++;
  }
  return trivia;
}
