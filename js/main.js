const formm = document.getElementById('formm');
const ul = document.getElementById('ul');
const btn = document.getElementById('openmodal');


function myfunction(){
    document.getElementById('formm')
    return;
}




const userName = document.getElementById('uname');
const age = document.getElementById('uage');

function elementcreation(textContent, parent, elementType = 'li'){
    const element = document.createElement(elementType);
    element.textContent = `${textContent.userName} ${textContent.age}`;
    parent.appendChild(element);


}


formm.addEventListener('submit',(event) => {
    event.preventDefault();
    if(!userName.value || !age.value){
        alert('feel the forms ')
        return;
    }
    if ( age.value <= 18 ){
        alert ('content under 18 ');
        return;
    }
    const userobject = {userName:userName.value, age:age.value};
    elementcreation(userobject, ul, 'li');
    userName.value = '';
    age.value = '';

  
 });



 

