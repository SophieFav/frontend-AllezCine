 //ici est l'age minimum

/*
        age_mini = 18;
        var reponse = prompt("Ce site est réservé au "+age_mini+" ans et plus. Ecrivez votre année de naissance s.v.p",2000);
        
        mydate = new Date;
        annee = mydate.getFullYear();
        if(reponse==null)
        reponse = annee;
        age = annee - reponse;
        
        if (age>=age_mini){
            return elmt;
        //alert("Ok, vous avez: "+age+" ans. Alors vous pouvez entrer")
        }else{
        alert("Vous avez : "+age+" ans. Vous n'êtes pas autorisé à voir ce contenu.");

        //ici est redirigé la personne
        document.location.href='http://www.google.com'
        }
        */

        $(".yes").click(function(){
            $("#popupage").hide();
        });

        $(".no").click(function(){
            document.location.href='http://www.google.com';
        });