var mX, mY, distance;
var $element = $('#magicButton'); 

$(document).mousemove(function(e) {
    
    // move button once for every three mouse movements (to avoid mothy flickering)
    var random = Math.floor(Math.random()*3); 

    if (random == 1) {
        
        // get distance from submit button
        distance = calculateDistance($element, e.pageX, e.pageY);            

        // pick direction button will move
        options = {};                
        var animate_options = ['left', 'bottom']; 
        var direction = animate_options[Math.floor(Math.random()*animate_options.length)]; 

        // 50% change direction will be "flipped" 
        var flip = (Math.floor(Math.random()*2) == 0) ? 1 : -1; 

        // the closer your mouse, the further the button will "jump"
        animate_distance = Math.pow(1.7, (1000 - distance)/100);
        animate_distance = animate_distance * flip; 

        // use jQuery animate to animate button
        animate_argument = '+=' + animate_distance.toString(); 
        options[direction] = animate_argument; 
        $element.animate(options, 30);   
    }
});


// calculate distance from element
// source: https://paulund.co.uk/how-to-work-out-distance-between-mouse-and-element
function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}


// "reward" if user clicks button
$element.click(function() {
    alert('Congratulations, your application has been submitted!'); 
});


// 
$('#cog-icon, #cogDescr').click(function() {
    $('.checkboxSection').toggle(500); 
})

// small touch
$('#cloverIcon').click(function() {
    alert('April Fool\'s!');     
});