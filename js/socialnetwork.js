jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 700 ) {  // Quand on est à 200pixels du haut de page,
                $('.reseaux').css('left','0'); // Replace à 10pixels de la droite l'image
            } else { 
                $('.reseaux').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});