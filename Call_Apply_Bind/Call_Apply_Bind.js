<script>
  /*

  Problem:

  function a(a,b,c,d...args){
   console.log(all arguments passed); // 13, 17
}

function b(){
   a(); // with all arguments positioned in even numbers
}
b(11,13,15,17)

// study call(), apply(), bind()

  */  
 

//call 

function a(a,b,c,d,...args){
     console.log(arguments[0])
}
function b(){
    a.call(this,[...arguments].filter((item,index) => index % 2 == 1).join(', '));
}
b(1,2,3,4,6,5,9,23,34,45,56,122); 



//apply

function a(a,b,c,d,...args){
     console.log(arguments[0])
}
function b(){
    a.apply(this,[[...arguments].filter((item,index) => index % 2 == 1).join(', ')]);
}
b(1,2,3,4,6,5,9,23,34,45,56,122);



//bind

function a(a,b,c,d,...args){
     console.log(arguments[0])
}
function b(){
    var newBind = a.bind(this,[...arguments].filter((item,index) => index % 2 == 1).join(', '));
    newBind()
}
b(1,2,3,4,6,5,9,23,34,45,56,122);


</script>