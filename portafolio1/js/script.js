
    $('#abrir').click(function(){
        $('#menu-responsive').animate({
            left: 0
        });
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });
    
    $('#cerrar, #a-contacto-movil').click(function(){
        $('#menu-responsive').animate({
            left: -290
        });
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
    });