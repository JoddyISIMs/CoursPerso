var tableau = new array(60);
var theend=0;

//Au chargement de la page
function load(){
	
	arrayLines = document.getElementById("content").rows; //On indique l'id du tableau HTML
	inde=0;
	
	for(var i=0; i<6; i++) //Pour les 6 lignes du tableau
	{	
		for(var k=0; k<10; k++) //Pour les 10 colonnes du tableau
		{
			tableau[inde] = Math.round(Math.random()*3)+1; //On génère une valeur aléatoire, et on la stocke dans le tableau JS
			arrayColonnes = arrayLines[i].cells; //On sélectionne la ligne du tableau HTML
			arrayColonnes[k].innerHTML = tableau[inde]; //On sélectionne la colonne du tableau HTML (ligne + colonne = case unique) et on affiche la valeur aléatoire correspondante
			inde++; //On incrémente inde pour pouvoir avancer dans le tableau JS
		}
	}
	
	init_troll(); //On positionne le troll
	init_hut(); //On positionne sa maison
	
}

//On positionne le troll
function init_troll(who){
	
	trollX = Math.round(Math.random()*9); //On génère une valeur aléatoire pour la colonne du tableau HTML
	trollY = Math.round(Math.random()*5); //On génère une valeur aléatoire pour la ligne du tableau HTML
	arrayColonnes = arrayLines[trollY].cells; //On sélectionne la ligne du tableau HTML
	arrayColonnes[trollX].innerHTML = "<img id='troll' src='troll.gif'>"; //On sélectionne la colonne du tableau HTML et on affiche le troll
	document.getElementById("cases").innerHTML=tableau[(trollY*10)+trollX]; //On affiche dans l'espace dédié le nombre de déplacements que le troll peut effectuer de cette case
	
}

//On positionne sa maison
function init_hut(){
	
	do //On génère des valeurs
	{
	hutX = Math.round(Math.random()*9); //On génère une valeur aléatoire pour la colonne du tableau HTML
	hutY = Math.round(Math.random()*5); //On génère une valeur aléatoire pour la ligne du tableau HTML
	}
	while(hutX == trollX && hutY == trollY); //Tant qu'elles sont toutes deux identiques à celles générées pour le troll (ce qui les placerait dans la même case du tableau HTML)
	
	arrayColonnes = arrayLines[hutY].cells; //On sélectionne la ligne du tableau HTML
	arrayColonnes[hutX].innerHTML = "<img id='hut' src='hut.gif'>"; //On sélectionne la colonne du tableau HTML et on affiche la maison
	
}

//Lors du clic sur un des 4 boutons (parara dépend du bouton, 1=gauche / 2=haut / 3=bas / 4=droite)
function move(parara){	
	
	var bonds = parseInt(document.getElementById("cases").innerHTML); //On récupère la valeur indiquant le nombre de cases à traverser dans l'espace dédié à son affichage
		
	if(theend==1) //Si le jeu est fini, on ne déplacera pas le troll
	{
		bonds=0; //Donc on fixe le nombre de cases à traverser à 0
	}
	
	switch(parara) //Selon la direction choisie par l'utilisateur
	{
	case 1: //Gauche
	trollX=trollX-bonds; //On décrémente la position du troll sur l'axe horizontal
	break;
   
  case 2: //Haut
   trollY=trollY-bonds; //On décrémente la position du troll sur l'axe vertical
   break;
  
  case 3: //Bas
   trollX=trollX+bonds; //On incrémente la position du troll sur l'axe horizontal
   break;
   
  case 4: //Droite
   trollY=trollY+bonds; //On incrémente la position du troll sur l'axe vertical
   break;
 }
	
	
	if(trollX>=0 && trollX<10 && trollY>=0 && trollY <6) //Si le troll se trouve dans les limites de la grille HTML
	{
		if(trollX==hutX && trollY == hutY) //Si le troll se trouve sur la case de sa maison
		{
			alert("Vous avez gagné"); //Il a gagné
			theend=1; //On indique la fin du jeu
		}
		else
		{
			arrayColonnes = arrayLines[trollY].cells; //On sélectionne la ligne du tableau HTML
			if(arrayColonnes[trollX].innerHTML!=1 && arrayColonnes[trollX].innerHTML!=2 && arrayColonnes[trollX].innerHTML!=3 && arrayColonnes[trollX].innerHTML!=4) //Si la case a été vidée
			{
				alert("Vous avez perdu"); //Il a perdu
				theend=1; //On indique la fin du jeu
			}
			else //Sinon
			{
				document.getElementById("cases").innerHTML=tableau[(trollY*10)+trollX]; //On affiche dans l'espace dédié le nombre de déplacements que le troll peut effectuer de cette case
				arrayColonnes[trollX].innerHTML=""; //On vide la case
			}
			
		}
	}
	else //Sinon
	{
		alert("Vous avez perdu"); //Il a perdu
		theend=1; //On indique la fin du jeu
	}
	
	//Chaque cellule fait 61px de large/haut, donc on doit parcourir 61px pour changer de cellule
	bonds *= 61;
	
	//Animation en fonction de la direction choisie par l'utilisateur
	switch(parara)
	{
		case 1: //Gauche
			bonds = "-="+bonds+"px"; //On conserve la marge actuelle, et on soustrait la nouvelle marge
			$("#troll").animate({ marginLeft:bonds },800); //Marge gauche négative = déplacement vers la gauche
			break;
	
		case 2: //Haut
			bonds = "-="+bonds+"px"; //On conserve la marge actuelle, et on soustrait la nouvelle marge
			$("#troll").animate({ marginTop:bonds },800); //Marge haut négative = déplacement vers le haut
			break;
		
		case 3: //Droite
			bonds = "+="+bonds+"px"; //On conserve la marge actuelle, et on ajoute la nouvelle marge
			$("#troll").animate({ marginLeft:bonds },800); //Marge gauche positive = déplacement vers la droite
			break;
	
		case 4: //Bas
			bonds = "+="+bonds+"px"; //On conserve la marge actuelle, et on ajoute la nouvelle marge
			$("#troll").animate({ marginTop:bonds },800); //Marge haut positive = déplacement vers le bas
			break;
	}
	
}