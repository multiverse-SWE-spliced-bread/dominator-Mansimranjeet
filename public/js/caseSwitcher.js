const btn = document.getElementById('quiet-btn');
btn.addEventListener('click', lowerCase);

const btn1 = document.getElementById('loud-btn');
btn1.addEventListener('click', upperCase);

const btn2 = document.getElementById('sarc-btn');
btn2.addEventListener('click', sarcCase);

function lowerCase (e){
    const temp = document.getElementById('patrick').innerText;
    txt = temp.toLowerCase();
    document.getElementById('patrick').innerText = txt;

}

function upperCase (e){
    const temp = document.getElementById('patrick').innerText;
    txt = temp.toUpperCase();
    document.getElementById('patrick').innerText = txt;

}

function sarcCase (e){
    const temp = document.getElementById('patrick').innerText;
    txt = sarcasticFont(temp);
    document.getElementById('patrick').innerText = txt;

}
var sarcasticFont = (text) => { 
    let lower = text.toLowerCase()
    let upper = text.toUpperCase()
    var arr = [...Array(text.length)]
    let output = ''
    for (var i = 0; i < arr.length; i++) {
       output += i % 2 == 0 ? lower[i] : upper[i]
    }
    return output
 }