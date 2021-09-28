var body = document.querySelector('body')
var btn = document.getElementById('button')
var colors = ['red', 'blue', 'green', 'aqua', 'orange', 'purple', 'violet', 'darkcyan', 'darkblue', 'darkkhaki', 'yellow', 'grey', 'green', 'lightgreen', 'snow', 'pink', 'red']

btn.addEventListener('click', () => {
    let colornum = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colornum]
    //MAde by Rahand.Amin
});