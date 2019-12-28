/* TO DO list:
 - preloader
 - language option
 - carousel
*/

// if html has attribute lang="en", language on site is english and the span of div.language has english text

// var polish = document.querySelector(".pl"),
//     english = document.querySelector(".en"),
//     button = document.querySelector('.lang-btn');

// var button = document.querySelector('.btn');
// var p = document.querySelectorAll('.about-paragraph');

// button.addEventListener("click", function(){
//     if(this.checked){
//         this.setAttribute("checked", "true")
//         document.documentElement.setAttribute('lang', 'pl')
//     } else{
//         this.setAttribute("checked", "false")
//         document.documentElement.setAttribute('lang', 'en')
//     }
// })

// Language
// var button = document.querySelector('lang-btn');

// button.addEventListener('click', )

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
    }, 800)
}