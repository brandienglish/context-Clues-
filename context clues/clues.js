$(document).ready(function () {
var friends = ['Goku', 'Naruto', 'Ichigo ', 'Deku', 'Gon'];
var locations = ['Nuketown', 'Leaf Village', 'Kame House', 'Soul Society', 'York New City', 'Japan', 'Karakura Town', 'Kami Lookout', 'Meteor City', 'Soul Society'];
var weapons = ['knife','rocket launcher','ray gun','fork','spoon','tooth pick','uzi','zanpato','avatar state','machete','fist','shoe','hot water','725','car','Dragon Fist',"Rock",'Rasegan','Bankai','Hado 33'];


for (var i = 1; i<= 100; i++) {
    var $h3 = $('<h3>Accusation'+ i + '</h3>');
    $($h3).appendTo("body");
    $($h3).click(clickAlert(i))
}

function clickAlert(i) {
    var friend = friends [i%5];
    var location = locations[i%10];
    var weapon = weapons[i%20];
    function Alert() {
   
        alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
        document.getElementById('xyz')
    }
    return Alert;
}
});