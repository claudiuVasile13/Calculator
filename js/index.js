$(document).ready(function(){
  
  var $ans = "";
  var $calc = "";

  $('.button').on("click", function() {
    
        var $text = $(this).text();
        console.log($text);
        if($text === "C") {
            $('#display').val("");
            $calc = "";
        } else if($text === 'D') {
            var cut = $('#display').val().slice(0,-1);
            $('#display').val(cut);
            $calc = cut;
        } else if($text === '=') {
            $calc = eval($calc);
            if($calc || $calc === 0) {
              // console.log($calc);
              $('#display').val($calc);
              $ans = $calc;    
              console.log($ans);
            }
        } else if($text === 'ANS') {
              console.log($ans);
              $calc += $ans;
              $('#display').val($calc);
               console.log('s=' + $('#display').val());
        } else {                   
              if($('#display').val().length <= 25) {
                  $calc += $text;                                                   
                  $('#display').val($calc);
              }
        }
    
  });
});