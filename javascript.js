//objet film 
function film(name,year,kindOne,kindTwo,poster){
    this.name=name,
    this.year=year,
    this.kind={
        one:kindOne,
        two:kindTwo
    },
    this.poster=poster
}
//poster de film
const poster1 = "img/poster1.jpg";
const poster2 = "img/poster2.jpeg";
const poster3 = "img/poster3.jpeg";
const poster4 = "img/poster4.jpg";
const poster5 = "img/poster5.jpg";
//les films
let film1 = new film("En eaux troubles",2018,"Thriller","Action",poster1);
let film2 = new film("Equalizer 2",2018,"Action","Drame",poster2);
let film3 = new film("Alpha",2018,"Aventure","Drame",poster3);
let film4 = new film("Les indestructible 2",2018,"Animation","Famille",poster4);
let film5 = new film("Ant-man et la guêpe",2018,"Action","Science-fiction",poster5);
