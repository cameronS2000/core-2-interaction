document.addEventListener("DOMContentLoaded", function() {
    var colorArray = [
        { background: '#ffb77c', text: '#FFFFFF' },
        { background: '#ff7cc3', text: '#000000' },
        { background: '#7cc3ff', text: '#FFFFFF' },
        { background: '#c6ff7c', text: '#000000' },
        { background: '#5f6a8d', text: '#000000' },
        { background: '#7d6c5a', text: '#FFFFFF' }
    ];

    var modules = document.querySelectorAll('.module');
    var colorIndex = 0;

    modules.forEach(function(module) {
        var randomColor = colorArray[colorIndex];
        module.style.backgroundColor = randomColor.background;
        module.style.color = randomColor.text;
        colorIndex = (colorIndex + 1) % colorArray.length;
    });
});