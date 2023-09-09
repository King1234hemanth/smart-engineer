var x=11; mesg=""
if(x%2==0){
    mesg="Even";
}
else
    mesg="odd";
console.log(x+"is"+mesg);
//pgm4 
var i=3;
mesg=""
switch(i){
    case 1:mesg="one"
    break;
    case 2:mesg="two"
    break;
    case 3:mesg="default"

}
console.log(mesg);
//pgm 5
var i,j;
for(i=19;i>0;i--){
    for(j=1;j<=i;j++){
        console.log(i+"");

    }
    console.log("<BR>");

}