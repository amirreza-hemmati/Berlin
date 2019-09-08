const forms = document.forms["form"];

forms.addEventListener("submit",(e) => {
    e.preventDefault();
    const name = forms["name"];
    const email = forms["email"];
    const massage = document.querySelector("#txtarea");
    if(name.value == "" && email.value == "" && massage.value == ""){
        name.style.borderBottom = '1px solid red';
        email.style.borderBottom = '1px solid red';
        massage.style.borderBottom = '1px solid red';
        setTimeout(() => {
            name.style.borderBottom = 'solid 1px #dfdfdf';
            email.style.borderBottom = 'solid 1px #dfdfdf';
            massage.style.borderBottom = 'solid 1px #dfdfdf';
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
    else if(name.value == "" && massage.value == ""){
        name.style.borderBottom = '1px solid red';
        massage.style.borderBottom = '1px solid red';
        setTimeout(() => {
            name.style.borderBottom = 'solid 1px #dfdfdf';
            massage.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else if(email.value == "" && massage.value == ""){
        email.style.borderBottom = '1px solid red';
        massage.style.borderBottom = '1px solid red';
        setTimeout(() => {
            email.style.borderBottom = 'solid 1px #dfdfdf';
            massage.style.borderBottom = 'solid 1px #dfdfdf';
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
    else if(massage.value == ""){
        massage.style.borderBottom = '1px solid red';
        setTimeout(() => {
            massage.style.borderBottom = 'solid 1px #dfdfdf';
        }, 4000);
    }
    else{
        Email.send({
            SecureToken : "2d22c698-b70e-4d2e-aae7-935f5e9ff0df",
            To : "berlinproject2018@gmail.com",
            From : "berlinproject2018@gmail.com",
            Subject : `your name: ${name.value}`,
            Body : `Hello your send massage:<hr>${massage.value}`
        }).then(
        message => {
            if(window.navigator.onLine)
            {
                alert("email is sending")
            }else{
                alert("email no sending")
            }
        }
        );
    }
});