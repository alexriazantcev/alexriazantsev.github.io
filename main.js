let zero = {
    number: 0,
    audio: 'palavra.m4a',
    name: "zero"
};

let um = {
    number: 1,
    audio: 'palavra.m4a',
    name: "um"
};

let dois = {
    number: 2,
    audio: 'palavra.m4a',
    name: "dois"
};

alert(zero.audio);

let numbers = [zero, um, dois];

/*let playsound = function(track) {new Audio(track).play();};

numbers.forEach((item, index, array) => {
    new Audio(item.audio).play();
  });
  */

  for (let i=0; i<numbers.length; i++) {
    playsound(i);
    }
    
    function playsound(i) {
    setTimeout(function() {
        new Audio(numbers[i].audio).play();
    }, 5000 * i);
    }
    