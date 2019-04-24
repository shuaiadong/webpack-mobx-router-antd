module.exports = function (css) {
    debugger
    console.log(css)
    if(window.innerWidth > 1000) {
        document.body.style.backgroundColor = '#f40'
    }
    css
    return css;
}