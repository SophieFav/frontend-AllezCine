//contact US
$('#btnPopup').click(function() {
    $('#popup').show();
});

$('#btnClose').click(function(){
    $('#popup').hide();
    return false;
});

// button arrow
jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','75px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});


/*var button = document.createElement("BUTTON");                                  
document.body.appendChild(button);  
button.innerHTML = "img/arrow.svg";                
button.addEventListener("click", function() {
    
    document.body.removeChild(button);                        
});
 
button.style.position = "absolute";
button.style.position = "absolute";
button.style.bottom = "25px";
button.style.bottom = "25px";
button.style.right = "25px";
button.style.right = "25px";
*/