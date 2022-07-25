const btn = document.getElementById("send-btn");
btn.addEventListener('click', clicked);

function clicked (e){
    const inp = document.getElementById('inp').value;

    const newP = document.createElement('p')
    newP.innerText= inp;

    const main = document.getElementById('chat');
    main.appendChild(newP);

    document.getElementById('inp').value='';
}