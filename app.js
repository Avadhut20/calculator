function Clear(){
    document.getElementById("result").value=" ";
}
function display(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    var p=document.getElementById("result").value;
    var evaluate=eval(p);
    document.getElementById("result").value=evaluate
}