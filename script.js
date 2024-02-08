document.addEventListener("DOMContentLoaded", function() {
    var colorArray = [
        { background: '#ffb77c', text: '#000000' },
        { background: '#ff7cc3', text: '#000000' },
        { background: '#7cc3ff', text: '#FFFFFF' },
        { background: '#c6ff7c', text: '#000000' },
        { background: '#5f6a8d', text: '#FFFFFF' },
        { background: '#7d6c5a', text: '#FFFFFF' }
    ];

    colorArray = shuffleArray(colorArray);
    var modules = document.querySelectorAll('.module');
    var colorIndex = 0;

    modules.forEach(function(module) {
        var randomColor = colorArray[colorIndex];
        module.style.backgroundColor = randomColor.background;
        module.style.color = randomColor.text;
        colorIndex = (colorIndex + 1) % colorArray.length;
    });
});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}