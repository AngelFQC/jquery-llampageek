$(document).bind("pageinit", function(){

	// Formulario de contacto
	$("input[name=tipo]").bind("change", function(){
		if($(this).val() == 3)
			$("input[name=asunto]").textinput('disable');
		else
			$("input[name=asunto]").textinput('enable');
	});

	// Cargar RSS
	$("button#actualizar").bind("click", function(){
		$.getJSON("./assets/bd-rss-eticagnulinux.json", function(objRSS){
			var lista = "";

			$.each(objRSS.articulos, function(i, articulo){
				var span = '<span class="ui-li-count">' + articulo.comentarios + '</span>';
				var a = '<a href="' + articulo.enlace + '" rel="external">' + articulo.titulo + span + '</a>';

				lista += '<li>' + a + '</li>';
			});

			$("#lista-rss").html(lista).listview("refresh");
		});

	});
});