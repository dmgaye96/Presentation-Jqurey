(function($){ //syntaxe qui permet d'éviter les conflits avec dautre biblio
/*$.fn.colorize = function(options){
    var settings=$.extend({ //permet de fusionner avec les options
        color:'#f55',
        backgroundColor:'black'
    }, options);
    $(this).each(function(){
        $(this).on("mouseover", function(){
            $(this).css('color',settings.color).css('backgroundColor',settings.backgroundColor);
        });
        $(this).on("mouseout",function(){
            $(this).css('color','').css('backgroundColor','')
        });

    }) */

    


    $.fn.colorize= function() { //on crée notre fonction colorize
        $(this).each(function(){ //pour chaque element auquel on va appliquer
        $(this).on("mouseover", function(){ //quand on met la souris sur lelement
            $(this).css('color','red'); //on color l'élement en rouge
        });
        $(this).on("mouseout",function(){ //quand on sort la souris 
            $(this).css('color','') // on enléve le style de couleur
        });
        
    });
return this;

    } /*
 $.fn.colorize= function(color) {
    $(this).each(function(){
    $(this).on("mouseover", function(){
        $(this).css('color',color);
    });
    $(this).on("mouseout",function(){
        $(this).css('color','')
    });
    
});


} 

})(jQuery)










   /*  jQuery.fn.mon_info=function(options){
        var element=document.createElement('div');
        $(element).addclass(options.info).hide();
        document.body.appendChild(element);
    
        return this.each(function(){
            $(this).hover(function(){
                $(element).show;
                $(element).html($(this).attr("rel"));
                $(this).mousemove(function(e){
                    $(element).css({"position":"absolute",
                                    "top": e.pageY + options.offsetY,
                                    "left": e.pageX + options.offsetX
                                    });

                });
            },function() {$(element).hide() });

            });
    
    }; */
