
(function (window) {
var names = ["Marie", "Jack", "Ben", "Nalson", "Niyo", "Fraddy", "Parry", "Laula", "Paura", "Jim"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window); 
