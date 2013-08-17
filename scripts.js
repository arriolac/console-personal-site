$(document).ready(function() {
  var lastInput;
  $('#console').submit(function(e){
    var $inputVal = $('#input').val();
    lastInput = $inputVal
    e.preventDefault();
    command($inputVal);
  });

  $(document).keydown(function(e){
    if (e.keyCode == 38) {
      lastTyped(lastInput); 
      return false;
    }
});
});

var command = function(input){
  var commands = {
    "help":" </br> -resume</br> -project", 
    "resume": "</br> unemployed",
    "project": "</br> lots of stuff",
    "clear": function(){ console.log('working') }
  };

  var $out = $('#console_out');
  var $input = $('#input');
  var $clear = $input.val('')
  console.log(commands[input]);

  if($out.children().length === 0 && !commands[input]){
    $out.append('<li> [guest@chrisarriola.me]$ </br>type help for list of navigation commands</li>');
    $clear; 

  } else if(commands[input]) {
    if (input === "clear") {
      commands.clear();
    } else {
      $out.append('<li> [guest@chrisarriola.me]$' +commands[input] + '</li>');
      $clear;
    }
  } else {
    $out.append('<li> [guest@chrisarriola.me]$ </br> invalid command type help for a list of valid commands</li>');
    $clear;
  }
}

var lastTyped = function(lastInput) {
  $('#input').val(lastInput);
}




