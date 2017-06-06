$(document).ready(function(){
	$.ajax({
	  method: "POST",
	  url: "https://api.vitortec.com/loterias/megasena/v1.2/",
	})
	  .done(carregaResultado);

	  $("#sugestao").click(sugestao);
	  $("#novaSugestao").click(sugestao);
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

	if(result.data.acumulou){
		$("#valorSena").addClass("hidden-xs");
		$("#acumulou").html("Valor Acumulado: R$ "+result.data.valorAcumulado);
	}

	var html = "";

	for(var i =0; i < result.data.resultado.ordemCrescente.length; i++){
		html += "<li>"+result.data.resultado.ordemCrescente[i]+"</li>";
	}

	$("#numeros").html(html);
}

var sugestao = () => {
	if($("#qtdNumerosJogo").val() > 60){
		alert("Valor deve ser menor ou igual a 60");
		return;
	}
	var numeros = [];
for(var i =0; i < $("#qtdNumerosJogo").val() ; i++){
	var numRandom = Math.floor((Math.random() * 60) +1);
	if((''+numRandom).length < 2){
		numRandom = "0"+numRandom
	}
	if($.inArray(numRandom, numeros) != -1) {
  		i--;
      continue;
  }else{
  	
  		numeros.push(numRandom);
  	
  	
  }
}

var sortNumber = function(x, y) { return x - y; };

var html="";
var numerosSugeridos = numeros.sort(sortNumber);
	for(var i= 0; i < numerosSugeridos.length; i++){
		html += "<li>"+numerosSugeridos[i]+"</li>";
	}
	$("#numerosSugeridos").html(html);
  return numeros.sort(sortNumber);
}