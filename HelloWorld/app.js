// Dark Theme
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function(){
    if(this.checked){
        trans()
        document.documentElement.setAttribute('dark', 'true')
    } else{
        trans()
        document.documentElement.setAttribute('dark', 'false')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
