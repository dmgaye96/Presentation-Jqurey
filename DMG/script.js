
//Quand le document qui est la page HTML est prete traite moi la fonction
//pour selectionner un element on utiluse les selecteurs 
//# c est pour selectionner les id
// .c est pour selectionner une classe 
// le nom des element avec le nom des tag
$(document).ready(function(){
$("#p1").click(function(){
    $('#p2').toggle(3000,function(){
        $('#p3').toggle(3000,function() {
            $('#p4').toggle(3000,function () {
                $('#p5').toggle(3000, function () {
                    $('#p6').toggle(3000);
                }) 
            });
        }); 
    }); 
});
});