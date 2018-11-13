//objet film 
function Film(name,year,kindOne,kindTwo,poster,description,realisateur,casting,durée,nationnalité,trailer){
    this.name=name,
    this.year=year,
    this.kind={
        one:kindOne,
        two:kindTwo
    },
    this.poster=poster,
    this.description=description,
    this.realisateur=realisateur,
    this.casting=casting,
    this.durée=durée,
    this.nationnalité=nationnalité,
    this.trailer=trailer
}

//poster de film et trailer
const poster1 = "img/poster1.jpg";
const trailer1 = "https://www.youtube.com/embed/YbR0nKcdAZo";
const poster2 = "img/poster2.jpeg";
const trailer2 ="https://www.youtube.com/embed/HyNJ3UrGk_I";
const poster3 = "img/poster3.jpeg";
const trailer3 ="https://www.youtube.com/embed/MhZOzjdW07U";
const poster4 = "img/poster4.jpg";
const trailer4 ="https://www.youtube.com/embed/8ZMfBg30ALo";
const poster5 = "img/poster5.jpg";
const trailer5 ="https://www.youtube.com/embed/A5jzpMR6rv4";
const poster6 = "img/poster6.jpg";
const trailer6 ="https://www.youtube.com/embed/w8vbue-Gshw";

//les films
let film1 = new Film("En eaux troubles",2018,"Thriller","Action",poster1,"Au cœur de l’océan Pacifique, le sous-marin d’une équipe de chercheurs a été attaqué par une créature gigantesque qu’on croyait disparue : le Megalodon, un requin préhistorique de 23 mètres de long. Le sauveteur-plongeur Jonas Taylor doit risquer sa vie pour sauver les hommes et les femmes prisonniers de l'embarcation… et affronter le prédateur le plus terrible de tous les temps.","Jon Turteltaub","Jason Statham, Bingbing Li, Rainn Wilson","1h54min","Amérique",trailer1);
let film2 = new Film("Equalizer 2",2018,"Action","Drame",poster2,"Robert McCall continue de servir la justice au nom des exploités et des opprimés. Mais jusqu’où est-il prêt à aller lorsque cela touche quelqu’un qu’il aime ?","Antoine Fuqua","Denzel Washington, Pedro Pascal, Bill Pullman","2h01min","Amérique",trailer2);
let film3 = new Film("Alpha",2018,"Aventure","Drame",poster3,"En Europe, il y a 20 000 ans, durant l'ère Paléolithique supérieur, un jeune homme part braver une nature dangereuse et inhospitalière afin de retrouver le chemin de sa tribu.","Albert Hughes","Kodi Smit-McPhee, Jóhannes Haukur Jóhannesson, Marcin Kowalczyk","1h36min","Amérique",trailer3);
let film4 = new Film("Les indestructible 2",2018,"Animation","Famille",poster4,"Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.","Brad Bird","Gérard Lanvin, Déborah Perret, Louane Emera","1h58min","Amérique",trailer4);
let film5 = new Film("Ant-man et la guêpe",2018,"Action","Science-fiction",poster5,"Après les événements survenus dans Captain America : Civil War, Scott Lang a bien du mal à concilier sa vie de super-héros et ses responsabilités de père. Mais ses réflexions sur les conséquences de ses choix tournent court lorsque Hope van Dyne et le Dr Hank Pym lui confient une nouvelle mission urgente… Scott va devoir renfiler son costume et apprendre à se battre aux côtés de La Guêpe afin de faire la lumière sur des secrets enfouis de longue date…","Peyton Reed","Paul Rudd, Evangeline Lilly, Michael Peña","1h58min","Amérique",trailer5);
let film6 = new Film("Skyscraper",2018,"Action","Thriller",poster6,"Ancien chef du commando de libération des otages du FBI et vétéran de l'armée américaine, Will Sawyer est désormais responsable de la sécurité des gratte-ciels. Alors qu'il est affecté à Hong Kong, il est accusé d'avoir déclenché un incendie dans la tour la plus haute et réputée la plus sûre du monde … Considéré comme fugitif, Will doit retrouver les criminels, prouver son innocence et surtout sauver sa femme et ses deux enfants prisonniers du bâtiment en flammes …","Rawson Marshall Thurber","Dwayne Johnson, Neve Campbell, Chin Han","1h43min","Amérique",trailer6);

//Modal function
let catalogue =[film1,film2,film3,film4,film5,film6];
let tri = (num) => {
    $(`#film${num}Titre`).text(catalogue[num-1].name);
    $(`#film${num}Date`).text(catalogue[num-1].year);
    $(`#film${num}Genre`).text(catalogue[num-1].kind.one + "-" + catalogue[num-1].kind.two);

    $(document).ready(function(){
        $(`#film${num}`).click(function(){
            $(".modal-title").text(catalogue[num-1].name);
            $(".description").text("Description: " + catalogue[num-1].description);
            $(".realisateur").text("Réaliateur: " + catalogue[num-1].realisateur);
            $(".casting").text("Casting: " + catalogue[num-1].casting);
            $(".durée").text("Durée: " + catalogue[num-1].durée);
            $(".nationnalité").text("Nationnalité: " + catalogue[num-1].nationnalité);
            $(".year").text("Année de production: " + catalogue[num-1].year);
            $(".kind").text("Genre: " + catalogue[num-1].kind.one + " - " + catalogue[num-1].kind.two);
            $(".trailerFilm").attr("src",catalogue[num-1].trailer);
        });
    });
}
for (i=1;i <6;i++){
    tri(i);
}

//Créateur d'élément film et tri
let afficher = (catalogue,num)=> {
    
    let divSectionFeaturedFilm= document.querySelector(".sectionFeaturedFilm");
    let divFilm = document.createElement("div");
    divSectionFeaturedFilm.appendChild(divFilm);
    divFilm.setAttribute("class","col-12 col-md-4 col-lg-2 film");

        let img = document.createElement("img");
        divFilm.appendChild(img);
        img.setAttribute("src",catalogue[num].poster);
        img.setAttribute("width","100%");

        let pTitre = document.createElement("p");
        divFilm.appendChild(pTitre);
        let Titre = document.createTextNode(catalogue[num].name);
        pTitre.appendChild(Titre);
        pTitre.setAttribute("class","filmTitre text-center")

        let divFilmDonnées = document.createElement("div");
        divFilm.appendChild(divFilmDonnées);
        divFilmDonnées.setAttribute("class","row filmDonnees");
            let pFilmDate = document.createElement("p");
            divFilmDonnées.appendChild(pFilmDate);
            let Date = document.createTextNode(catalogue[num].year);
            pFilmDate.appendChild(Date);
            
            let pFilmGenre = document.createElement("p");
            divFilmDonnées.appendChild(pFilmGenre);
            let Genre = document.createTextNode(catalogue[num].kind.one +" - "+ catalogue[num].kind.two);
            pFilmGenre.appendChild(Genre);
}
let z=1
let choix="" ;

let filmTous =()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnTous").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    for (y=0;y<2*z;y++){
        for (i=0;i <(catalogue.length);i++){
        afficher(catalogue,i);
        }
    }
    choix = "filmTous";
}
filmTous();
let filmAction = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnAction").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueAction = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Action" || catalogue[i].kind.two == "Action"){
            catalogueAction.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueAction.length;i++){
            afficher(catalogueAction,i);
        }
    }
    choix = "filmAction";
}
let filmDrame = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnDrame").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueDrame = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Drame" || catalogue[i].kind.two == "Drame"){
            catalogueDrame.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueDrame.length;i++){
            afficher(catalogueDrame,i);
        }
    }
    choix = "filmDrame";
}
let filmThriller = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnThriller").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueThriller = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Thriller" || catalogue[i].kind.two == "Thriller"){
            catalogueThriller.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueThriller.length;i++){
            afficher(catalogueThriller,i);
        }
    }
    choix = "filmThriller";
}
let filmAventure = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnAventure").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueAventure = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Aventure" || catalogue[i].kind.two == "Aventure"){
            catalogueAventure.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueAventure.length;i++){
            afficher(catalogueAventure,i);
        }
    }
    choix = "filmAventure";
}
let filmAnimation = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnAnimation").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueAnimation = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Animation" || catalogue[i].kind.two == "Animation"){
            catalogueAnimation.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueAnimation.length;i++){
            afficher(catalogueAnimation,i);
        }
    }
    choix = "filmAnimation";
}
let filmFamille = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnFamille").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueFamille = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Famille" || catalogue[i].kind.two == "Famille"){
            catalogueFamille.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueFamille.length;i++){
            afficher(catalogueFamille,i);
        }
    }
    choix = "filmFamille";
}
let filmScience = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnScience-fiction").css("background-color","red");
    $(".sectionFeaturedFilm").children().remove();
    let catalogueScience = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Science-fiction" || catalogue[i].kind.two == "Science-fiction"){
            catalogueScience.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueScience.length;i++){
            afficher(catalogueScience,i);
        }
    }
    choix = "filmScience";
}

let plusDeFilm = ()=>{
    if (z<5){
        z+=1;  
    }
    switch(choix){
        case "filmTous":
        filmTous();
        break;
        case "filmAction":
        filmAction();
        break;
        case "filmDrame":
        filmDrame();
        break;
        case "filmThriller":
        filmThriller();
        break;
        case "filmAnimation":
        filmAnimation();
        break;
        case "filmAventure":
        filmAventure();
        break;
        case "filmFamille":
        filmFamille();
        break;
        case "filmScience":
        filmScience();
        break;
    }
    cache();
}
let moinsDeFilm = ()=>{
    if (z>1){
        z-=1;
    }
    switch(choix){
        case "filmTous":
        filmTous();
        break;
        case "filmAction":
        filmAction();
        break;
        case "filmDrame":
        filmDrame();
        break;
        case "filmThriller":
        filmThriller();
        break;
        case "filmAnimation":
        filmAnimation();
        break;
        case "filmAventure":
        filmAventure();
        break;
        case "filmFamille":
        filmFamille();
        break;
        case "filmScience":
        filmScience();
        break;
    }
    cache();
}
let cache = ()=>{
    if (z==1){
        $(".moinsDeFilm").hide();
    } else{
        $(".moinsDeFilm").show();
    }
    if (z==5){
        $(".plusDeFilm").hide();
    }
    else{
        $(".plusDeFilm").show();
    }
}
cache();


//Créateur d'élément serie et tri
let affiche = (catalogue,num)=> {
    
    let divSectionFeaturedFilm= document.querySelector(".sectionFeaturedSerie");
    let divFilm = document.createElement("div");
    divSectionFeaturedFilm.appendChild(divFilm);
    divFilm.setAttribute("class","col-12 col-md-4 col-lg-2 film");

        let img = document.createElement("img");
        divFilm.appendChild(img);
        img.setAttribute("src",catalogue[num].poster);
        img.setAttribute("width","100%");

        let pTitre = document.createElement("p");
        divFilm.appendChild(pTitre);
        let Titre = document.createTextNode(catalogue[num].name);
        pTitre.appendChild(Titre);
        pTitre.setAttribute("class","filmTitre text-center")

        let divFilmDonnées = document.createElement("div");
        divFilm.appendChild(divFilmDonnées);
        divFilmDonnées.setAttribute("class","row filmDonnees");
            let pFilmDate = document.createElement("p");
            divFilmDonnées.appendChild(pFilmDate);
            let Date = document.createTextNode(catalogue[num].year);
            pFilmDate.appendChild(Date);
            
            let pFilmGenre = document.createElement("p");
            divFilmDonnées.appendChild(pFilmGenre);
            let Genre = document.createTextNode(catalogue[num].kind.one +" - "+ catalogue[num].kind.two);
            pFilmGenre.appendChild(Genre);
}
let serieTous =()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnTous").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    for (y=0;y<2*z;y++){
        for (i=0;i <(catalogue.length);i++){
        affiche(catalogue,i);
        }
    }
    choix = "serieTous";
}
serieTous();
let serieAction = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnAction").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueAction = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Action" || catalogue[i].kind.two == "Action"){
            catalogueAction.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueAction.length;i++){
            affiche(catalogueAction,i);
        }
    }
    choix = "serieAction";
}
let serieDrame = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnDrame").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueDrame = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Drame" || catalogue[i].kind.two == "Drame"){
            catalogueDrame.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueDrame.length;i++){
            affiche(catalogueDrame,i);
        }
    }
    choix = "serieDrame";
}
let serieThriller = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnThriller").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueThriller = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Thriller" || catalogue[i].kind.two == "Thriller"){
            catalogueThriller.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueThriller.length;i++){
            affiche(catalogueThriller,i);
        }
    }
    choix = "serieThriller";
}
let serieAventure = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnAventure").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueAventure = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Aventure" || catalogue[i].kind.two == "Aventure"){
            catalogueAventure.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueAventure.length;i++){
            affiche(catalogueAventure,i);
        }
    }
    choix = "serieAventure";
}
let serieAnimation = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnAnimation").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueAnimation = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Animation" || catalogue[i].kind.two == "Animation"){
            catalogueAnimation.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueAnimation.length;i++){
            affiche(catalogueAnimation,i);
        }
    }
    choix = "serieAnimation";
}
let serieFamille = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnFamille").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueFamille = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Famille" || catalogue[i].kind.two == "Famille"){
            catalogueFamille.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueFamille.length;i++){
            affiche(catalogueFamille,i);
        }
    }
    choix = "serieFamille";
}
let serieScience = ()=>{
    $(".sectionBtnTri button").css("background-color","lightgrey");
    $(".btnScience-fiction").css("background-color","red");
    $(".sectionFeaturedSerie").children().remove();
    let catalogueScience = [];
    for (i=0;i<catalogue.length;i++){
        if (catalogue[i].kind.one == "Science-fiction" || catalogue[i].kind.two == "Science-fiction"){
            catalogueScience.push(catalogue[i]);
        }
    }
    for (y=0;y<1*z;y++){
        for (i=0;i<catalogueScience.length;i++){
            affiche(catalogueScience,i);
        }
    }
    choix = "serieScience";
}

let plusDeSerie = ()=>{
    if (z<5){
        z+=1;  
    }
    switch(choix){
        case "serieTous":
        serieTous();
        break;
        case "serieAction":
        serieAction();
        break;
        case "serieDrame":
        serieDrame();
        break;
        case "serieThriller":
        serieThriller();
        break;
        case "serieAnimation":
        serieAnimation();
        break;
        case "serieAventure":
        serieAventure();
        break;
        case "serieFamille":
        serieFamille();
        break;
        case "serieScience":
        serieScience();
        break;
    }
    cacher();
}
let moinsDeSerie = ()=>{
    if (z>1){
        z-=1;
    }
    switch(choix){
        case "serieTous":
        serieTous();
        break;
        case "serieAction":
        serieAction();
        break;
        case "serieDrame":
        serieDrame();
        break;
        case "serieThriller":
        serieThriller();
        break;
        case "serieAnimation":
        serieAnimation();
        break;
        case "serieAventure":
        serieAventure();
        break;
        case "serieFamille":
        serieFamille();
        break;
        case "serieScience":
        serieScience();
        break;
    }
    cacher();
}
let cacher = ()=>{
    if (z==1){
        $(".moinsDeSerie").hide();
    } else{
        $(".moinsDeSerie").show();
    }
    if (z==5){
        $(".plusDeSerie").hide();
    }
    else{
        $(".plusDeSerie").show();
    }
}
cacher();


//Shop Movie 
$(function(){
    const carrousel = $('#slider');
    let img = $('#slider li');
    let i = 0;
    let lastImg = img.length-1;
    let currentImg = img.eq(i);

    img.css('display', 'none');
    currentImg.css('display', 'block');

    $('.next').click(function(){
        i++;

        if(i <= lastImg){
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.css('display','block');
        }else{
            i = lastImg;
        }
    });

    $('.prev').click(function(){
        i--;

        if(i >= 0){
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.css('display','block');
        }else{
            i = 0;
        }
    });
});