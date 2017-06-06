$(document).ready(function(){
	$.ajax({
	  method: "POST",
	  url: "https://api.vitortec.com/loterias/megasena/v1.2/",
	})
	  .done(carregaResultado);
});

var carregaResultado = (result) => {
	$("#loading").fadeOut("slow");
	console.log(result.data);

	$("#data").html("Data "+result.data.data);

	$("#concurso").html("Concurso " + result.data.concurso);

	$("#acumulado").html("R$ " + result.data.valorAcumulado);

	$("#qtdQuadra").html("Ganhadores: "+result.data.ganhadores.quadra.quantidade);
	$("#valorQuadra").html("R$ " +result.data.ganhadores.quadra.valor);

	$("#qtdQuina").html("Ganhadores: "+result.data.ganhadores.quina.quantidade);
	$("#valorQuina").html("R$ " +result.data.ganhadores.quina.valor);

	$("#qtdSena").html("Ganhadores: "+result.data.ganhadores.sena.quantidade);
	$("#valorSena").html("R$ " +result.data.ganhadores.sena.valor);

	var html = "";

	for(var i =0; i < result.data.resultado.ordemCrescente.length; i++){
		html += "<li>"+result.data.resultado.ordemCrescente[i]+"</li>";
	}

	$("#numeros").html(html);
}