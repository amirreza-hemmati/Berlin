const forms = document.forms["form"];

forms.addEventListener("submit",(e) => {
    e.preventDefault();
    const name = forms["name"];
    const email = forms["email"];
    const massages = document.querySelector("#txtarea");


    if(name.value == "" && email.value == "" && massages.value == ""){
        name.style.borderBottom = '1px solid red';
        email.style.borderBottom = '1px solid red';
        massages.style.borderBottom = '1px solid red';
        setTimeout(() => {
            name.style.borderBottom = 'solid 1px #dfdfdf';
            email.style.borderBottom = 'solid 1px #dfdfdf';
            massages.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else if(name.value == "" && email.value == ""){
        name.style.borderBottom = '1px solid red';
        email.style.borderBottom = '1px solid red';
        setTimeout(() => {
            name.style.borderBottom = 'solid 1px #dfdfdf';
            email.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else if(name.value == "" && massages.value == ""){
        name.style.borderBottom = '1px solid red';
        massages.style.borderBottom = '1px solid red';
        setTimeout(() => {
            name.style.borderBottom = 'solid 1px #dfdfdf';
            massages.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else if(email.value == "" && massages.value == ""){
        email.style.borderBottom = '1px solid red';
        massages.style.borderBottom = '1px solid red';
        setTimeout(() => {
            email.style.borderBottom = 'solid 1px #dfdfdf';
            massages.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }else if(name.value == ""){
        name.style.borderBottom = '1px solid red';
        setTimeout(() => {
            name.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else if(email.value == ""){
        email.style.borderBottom = '1px solid red';
        setTimeout(() => {
            email.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else if(massages.value == ""){
        massages.style.borderBottom = '1px solid red';
        setTimeout(() => {
            massages.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else{
        Email.send({
            SecureToken : "7548a260-30f6-4326-ba61-ec5c24da9b3a",
            To : "berlinproject2018@gmail.com",
            From : "berlinproject2018@gmail.com",
            Subject : `your name: ${name.value}`,
            Body : `Hello your send massage:<hr>${massages.value} <br> ${email.vlaue}`
        }).then(
        message => {
            alert('your email is: ' + massage)
            name.value = "";
            email.value = "";
            massages.value = "";
        }
        );
    }
});