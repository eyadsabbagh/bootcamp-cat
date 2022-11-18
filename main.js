var selectedPath = null
var paths = document.querySelectorAll('path')
var usedColor = []
for (var i = 0; i < paths.length; i++) {
    paths[i].addEventListener('click', function (event) {
        if (selectedPath) {
            selectedPath.style.stroke = 'black'
        }
        selectedPath = event.target
        selectedPath.style.stroke = 'red'
    })
}

document.querySelector('#colorize').addEventListener('click', function () {
    if (!selectedPath) {
        window.alert('please slect a path to color ')
        return
    }
    color = document.querySelector('#color').value
    selectedPath.style.fill = color
    selectedPath.style.stroke = 'black'
    selectedPath = null
    if (usedColor.indexOf(color) == -1) {
        usedColor.push(color)
        displayUsedColors()
    }
})

function displayUsedColors() {
    var divs = ''
    for (var i = 0; i < usedColor.length; i++) {
        divs += `<div style="background-color: ${usedColor[i]};"></div>"`
    }
    document.querySelector('#used').innerHTML = divs
    var usedColorDivs = document.querySelectorAll('.used-color')
    for(var i = 0; i< usedColorDivs.length; i++){
        usedColorDivs[i].addEventListener('click', function(event){
            document.getElementById('color').value = event.target.getAttribute('data-color')
        })
    }

}
document.querySelector('#remove-color').addEventListener('click', function(){
    if (selectedPath){
        selectedPath.style.fill = 'transparent'
        selectedPath.style.stroke = 'black'
    }
})