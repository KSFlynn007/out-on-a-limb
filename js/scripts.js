function resetAll(){
    let form = document.getElementsByName('chk');
    for (let i = 0; i < form.length; i ++){
        if(form[i].type == 'checkbox'){
            form[i].checked = false;
        }
    }
}

function selectAll(){
    let form = document.getElementsByName('chk');
    for(let i = 0; i < form.length; i++){
        if(form[i].type == 'checkbox'){
            form[i].checked = true;
        }
    }
}