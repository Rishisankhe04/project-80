var name_of_ppl=[];
function submit(){
    name_of_ppl.push(document.getElementById("name_1").value);
    console.log(name_of_ppl);
    document.getElementById("display_name").innerHTML=name_of_ppl;
}
function show(){
var i=name_of_ppl.join("<br>");
document.getElementById("p1").innerHTML=i;
}
function sorting(){
    name_of_ppl.sort();
    var i=name_of_ppl.join("<br>");
document.getElementById("p2").innerHTML=i;
}
function search(){
    var s=document.getElementById("name_2").value;
    var found=0;
    var j;
    for(j=0; j<name_of_ppl.length; j++){
        if(s==name_of_ppl[j]){
            found=found+1;
        }
    }
    document.getElementById("p3").innerHTML="name found "+found+" times";
}
