function resetAll(){
    let form = document.getElementsByClassName('largeCheckbox');
    for (let i = 0; i < form.length; i ++){
        if(form[i].type == 'checkbox'){
            form[i].checked = false;
        }
    }
}

function selectAll(){
    let form = document.getElementsByClassName('largeCheckbox');
    for(let i = 0; i < form.length; i++){
        if(form[i].type == 'checkbox'){
            form[i].checked = true;
        }
    }

    // modal pop up - you've done it all!
}