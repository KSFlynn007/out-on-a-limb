let form = document.getElementsByClassName('largeCheckbox');
let count = 0;

function resetAll(){
    for (let i = 0; i < form.length; i ++){
        if(form[i].type == 'checkbox'){
            form[i].checked = false;
        }
    }
}

function selectAll(){
    for(let i = 0; i < form.length; i++){
        if(form[i].type == 'checkbox'){
            form[i].checked = true;
        }
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("selectAll");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    selectAll();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function selected()
{
    if(event.target.checked){
        count += 1;
    } else if(event.target.checked == false){
        count -= 1;
    }


    if (count === form.length){
        modal.style.display = 'block';
    }
}


// for loop should also work?

// function complete()
// {
//     for(let i = 0; i < form.length; i++){
//         form[i].addEventListener('change', function(e){
//             if(form[i].checked){
//                 modal.style.display = "block";
//             }
//         })
//     }

// }

