//Affichage du tableau de façon simplifiée

var tableau = document.getElementById("content");
var ligne;
var colonne;

for(i=0;i<6;i++)
{
	ligne = tableau.insertRow(); //On va créer 6 lignes
	
	for(var j=0;j<10;j++)
	{
		colonne = ligne.insertCell(); //Comprenant chacune 10 cellules
	}
} 