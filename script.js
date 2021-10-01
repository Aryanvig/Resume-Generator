function addNewField(){
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
     newNode.classList.add('mt-2')
     newNode.setAttribute('placeholder','Enter Here')
    let weOb= document.getElementById('we')
    let weAddButtonOb= document.getElementById('weButton')

    weOb.insertBefore(newNode,weAddButtonOb)
}

function addNewAqField(){

    let newaqNode= document.createElement('textarea')
    newaqNode.classList.add('form-control')
    newaqNode.classList.add('eqField')
    newaqNode.classList.add('mt-2')
     newaqNode.setAttribute('placeholder','Enter Here')

     let weaqOb= document.getElementById('aQ')
    let weAddButtonaqOb= document.getElementById('aQButton')
    weaqOb.insertBefore(newaqNode,weAddButtonaqOb)
}

// generate resume

function generateResume(){
    // namefield
    let nameField= document.getElementById('nameField').value;
    document.getElementById('nameT').innerHTML= nameField;
    document.getElementById('nameT2').innerHTML= nameField;
// contact
    let contactField= document.getElementById('contactField').value;
    document.getElementById('contT').innerHTML= contactField;
//    address 
    let address= document.getElementById('address').value;
    document.getElementById('addT').innerHTML= address;
    // objective

    let objectiveField= document.getElementById('objectiveField').value;
    document.getElementById('objT').innerHTML= objectiveField;
// work experience
let wep= document.getElementsByClassName('weField')
let str=""

for(let e of wep){
    str= str + `<li> ${e.value} </li>`
}
document.getElementById('weT').innerHTML=str;

// academic qual
let eqp= document.getElementsByClassName('eqField')
let str1=""

for(let e of eqp){
    str1= str1 + `<li> ${e.value} </li>`
}
document.getElementById('aqT').innerHTML=str1;

// image
let file= document.getElementById('imageField').files[0];
console.log(file)

let reader= new FileReader()
reader.readAsDataURL(file)
console.log(reader.result)
    
    reader.onloadend=function(){
        document.getElementById('imgT').src= reader.result;
    }

document.getElementById('resume-form').style.display= 'none';
document.getElementById('resume-template').style.display= 'block';

}

// print
function printResume(){
    window.print();
}