function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
  }
}


function obtenerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}

function juego(){
   var intentos=10;
	 var palabra=obtenerPalabraSecreta();
   palabra = palabra.join("");
	 var ocultar="";
	 var ganar=false;
	for(var i=0;i<palabra.length;i++)
		ocultar+="*";

	do{
		var letra =prompt("La palabra adivinar es: " +ocultar+"\nIngresa una letra para evitar ser ahorcado, tienes 10 intentos");
		var indice = palabra.indexOf(letra);
		var entrar=false;
		console.clear();
		if(letra.length==1){
			while(indice>=0){
				entrar=true;
				ocultar = ocultar.split("");
				ocultar[indice]=letra;
				ocultar = ocultar.join("");
				console.log(ocultar);
				palabra = palabra.split("");
				palabra[indice]="_";
				palabra = palabra.join("");
				indice = palabra.indexOf(letra);
			}
			if(ocultar.indexOf("*")==-1)
			{
				console.log("Felicidades Ganaste!!! :) :) :) ");
				ganar=true;
				break;
			}

			else if(!entrar)
			{
				intentos--;

			}
			entro=false;
			Dibujo(intentos);
		}

	}while(intentos>0);

	if(!ganar)
	{
		console.log("Lo Siento Perdisteee :( :( " );
	}
}


function Dibujo(h) {
  var hombre =  [      "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                       "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];

   var dibujo = " "
   var m= hombre.length;
      for(var i = 0; i < m; i++) {
        if (h < m){
         console.log(dibujo= hombre[i]);
        h++;
        }

      }


}

juego();
