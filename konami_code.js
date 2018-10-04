const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  
  document.body.addEventListener('keydown', function(e){
    const key = e.key || e.which;
    
    if (key === codes[index]){
      index++;
      
      if (index === codes.length){
        window.alert('Congrats you entered the Konami code');
        index = 0;
    }
    }else{
      index = 0;
    }
  });
}

init()
