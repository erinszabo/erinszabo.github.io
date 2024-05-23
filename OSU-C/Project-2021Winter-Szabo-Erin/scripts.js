
var myTips = ['Keep a plant check-in schedule', 
               'Check often, water only when needed', 
               'Try different locations if the plant seems unhealthy', 
               "Don't be afraid to trim when needed", 
               'Join a planters social group', 
               'When in doubt, YouTube!'];

function convertToUL(root, arr) {                  //base, myTips array
  var ul = document.createElement('ul');
  var li;
  
  root.appendChild(ul);                            // start at the base
  arr.forEach(function(item) {
    li = document.createElement('li');             // new line
    li.appendChild(document.createTextNode(item)); // append line
    ul.appendChild(li);                            // append line to ul
  });
}

var div = document.getElementById('myList');

convertToUL(div, myTips);
