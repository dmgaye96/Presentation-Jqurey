(function($)
{ 
	$.fn.imageSlide=function(options)
	{     
            //On définit nos paramètres par défaut
            var defauts=
            {
		'interval': 5000,		//Intervalle entre chaque image, en millisecondes
		'width': '300px',		//Largeur de la galerie
		'height': '150px',		//Hauteur de la galerie
		'scaleWidth': true,		//Doit-on adapter la largeur de l'image ?
		'scaleHeight': true,	        //Doit-on adapter la hauteur de l'image ?
		'makeLinks': false,		//Doit-on créer des liens ?
		'callback': null		//Fonction appelée à chaque nouvelle image
            };  
           
            //On fusionne nos deux objets ! =D
            var parametres=$.extend(defauts, options);
		
	    //Si l'intervalle est trop court, on le fixe à 1 seconde
	    //pour éviter que le défilement soit trop rapide
	    parametres.interval=Math.max(1000,parametres.interval);
		
            return this.each(function()
	    {
			//On stocke notre élément dans une variable par commodité
			var element=$(this);
							
			//On compte le nombre d'images de notre galerie
			var totalImages=element.find('img').length;
			
			//Le compteur pour nous permettre de parcourir les images
			var compteur=0;
				
			//On modifie le style de notre galerie
			element.css(
			{
				'border': '1px solid #000',
				'width': parametres.width,
				'height': parametres.height,
				'overflow': 'hidden'
			}).find('img').each(function(id) //Puis on parcourt enfin chaque image !
			{
				//Si on doit adapter les dimensions des images, on le fait
				if(parametres.scaleWidth)
				{
					$(this).css('width','100%')
				}
				if(parametres.scaleHeight)
				{
					$(this).css('height','100%')
				}
				//Si on fait des liens, on change le curseur et on 
				//enlève la bordure bleue toute moche
				if(parametres.makeLinks)
				{
					$(this).css(
					{
						'cursor': 'pointer',
						'border': '0px'
					});
					//Et on entoure l'image de son lien, récupéré via le alt !
					$(this).wrap('<a href="'+$(this).attr('alt')+'"></a>');
				}					
				
				//On ne fait apparaitre que la première image
				if(id>0)
				{
					$(this).hide();
				}
			});
			
			//Et on définit enfin notre défilement
			setInterval(function()
			{	
				//On récupère l'image actuellement visible et on la fait disparaitre
				element.find('img:eq('+compteur+')').fadeOut(function()
				{						
					//On incrémente le compteur si on n'est pas sur la dernière image
					//Sinon, on le remet à 0		
					if(compteur!=totalImages-1)
					{
						compteur++;
					}
					else
					{
						compteur=0;
					}
					//Et on fait donc apparaitre l'image suivante
					element.find('img:eq('+compteur+')').fadeIn(function()
					{
						//Et si on a une fonction définie, on l'appelle !
						//Et on lui passe notre image en paramètre
						if(parametres.callback)
						{
							parametres.callback($(this));
						}
					});
				});
			},parametres.interval);
		});						   
	};
})(jQuery);
