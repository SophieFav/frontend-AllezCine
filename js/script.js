jQuery(document).ready(function() {
    // This will make the cookie bar disappear when the accept button is clicked
        jQuery('.gdpr-button-accept').click(function(){
            jQuery('#gdpr-box').fadeOut('slow');
            
            if (!jQuery('.cookies-accept').is()) {
                
                // Add the cookie. It will remain for a year
                  jQuery.cookie('cookiebar', 1, {expires: 365, path: '/'});
                }
            return false;
        });
    
        // If the cookie is true, don't show the cookie bar
        if (!jQuery.cookie('cookiebar') == 1) {
            jQuery('.cookies-accept').css({'display':'block'});
        }
    });