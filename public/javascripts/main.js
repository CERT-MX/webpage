var Bubble = function() {
  var Buttons = [{
        text:"Completar mi registro",
        CallBack:function() {
         // alert("clickeaste al boton");
        }
      }];

  var BubbleObject = {id:1,title:"First Message", body:"Body Message",Buttons : Buttons}
  var Move = function () {
      console.log('move');
      $("#n1").animate({marginLeft: "0.09in"},0,MoveBack)
  }
  var MoveBack = function(){
      console.log('moveBack');
      $("#n1").animate({marginLeft: "0.02in"},500)
  }

  return {
    Run : function () {
      var currentInterval = setInterval(Move,1000);
      $("#bubble-able > div").mouseenter(function() {
        console.log('mouse over');
        clearInterval(currentInterval);
        $(this).animate({width:"400px",height:"400px"},250,function(){alert("");})
      });

      $("#bubble-able > div").mouseout(function() {
        $(this).animate({width:"40px",height:"40px"},250,function(){alert("");});
      });
    }
  }
}();

Bubble.Run();
