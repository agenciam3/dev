$(document).ready(function(){$("#filt").on("click",function(){$("#opcoes").css("left","0%"),$("#filtrar").css("left","0%")}),$("#ord").on("click",function(){$("#opcoes").css("left","0%"),$("#ordenar").css("left","0%")}),$(".fcjs").on("click",function(){$("#opcoes").css("left","-100%"),$("#ordenar").css("left","-100%"),$("#filtrar").css("left","-100%")});var c=0;$(".fcjs2").on("click",function(){var o,a=$(this).attr("id");switch($(this).toggleClass("fclose2"),a){case"fc1":o="650px";break;case"fc2":o="180px";break;case"fc3":o="292px"}"0px"!=$("."+a).css("height")?(o="0px",c-=1):c+=1,$("."+a).css("height",o),0==c&&$("#optbut").css("height","0px"),0<c&&$("#optbut").css("height","46px"),c<0&&(c=0),3<c&&(c=3)}),$(".maiscor").on("click",function(){$("#fc11").toggleClass("fc11b"),$(this).css("display","none"),$(".menoscor").css("display","block")}),$(".menoscor").on("click",function(){$("#fc11").toggleClass("fc11b"),$(this).css("display","none"),$(".maiscor").css("display","block")});var t={p:[{nome:"CAMISETA MESCLA",preco:"28.00",parcela:"até 3x de R$9,33",cor:["Branco","Amarelo"],tamanho:["P","M","G"],cod:"1"},{nome:"SAIA EM COURO",preco:"398.00",parcela:"até 5x de R$30,00",cor:["Preto","Azul"],tamanho:["M","G","GG"],cod:"2"},{nome:"CARDIGAN TIGRE",preco:"398.00",parcela:"até 5x de R$30,00",cor:["Laranja","Preto"],tamanho:["G","GG","U"],cod:"3"},{nome:"CARDIGAN OFF WHITE",preco:"99.90",parcela:"até 3x de R$33,30",cor:["Branco","Cinza"],tamanho:["GG","U","36"],cod:"4"},{nome:"BODY LEOPARDO",preco:"129.90",parcela:"até 3x de R$33,30",cor:["Laranja","Preto"],tamanho:["U","36","38"],cod:"5"},{nome:"CASACO PELOS",preco:"398.00",parcela:"até 5x de R$30,00",cor:["Rosa","Branco"],tamanho:["36","38","40"],cod:"6"},{nome:"CROPPED STRIPES",preco:"120.00",parcela:"até 3x de R$40,00",cor:["Laranja","Amarelo"],tamanho:["38","40","42"],cod:"7"},{nome:"CAMISA TRANSPARENTE",preco:"398.00",parcela:"até 5x de R$30,00",cor:["Preto","Laranja"],tamanho:["40","42","44"],cod:"8"},{nome:"POCHETE CLUTH",preco:"99.00",parcela:"até 3x de R$33,00",cor:["Preto","Verde"],tamanho:["42","44","46"],cod:"9"},{nome:"CAMISA MESCLA V2",preco:"56.00",parcela:"até 3x de R$18,66",cor:["Branco","Vermelho"],tamanho:["44","46","P"],cod:"10"},{nome:"SAIA DE COURO V2",preco:"796.00",parcela:"até 5x de R$60,00",cor:["Preto","Rosa"],tamanho:["46","P","M"],cod:"11"},{nome:"CARDIGAN TIGRE V2",preco:"796.00",parcela:"até 5x de R$60,00",cor:["Laranja","Preto"],tamanho:["P","M","G"],cod:"12"},{nome:"CARDIGAN OFF WHITE V2",preco:"199.80",parcela:"até 3x de R$66,60",cor:["Branco","Preto"],tamanho:["M","G","U"],cod:"13"},{nome:"BODY LEOPARDO V2",preco:"259.80",parcela:"até 3x de R$66,60",cor:["Laranja","Preto"],tamanho:["G","U","36"],cod:"14"},{nome:"CASACO PELOS V2",preco:"796.00",parcela:"até 5x de R$60,00",cor:["Rosa","Vinho"],tamanho:["U","36","38"],cod:"15"},{nome:"CROPPED STRIPES V2",preco:"240.00",parcela:"até 3x de R$80,00",cor:["Laranja","Azul"],tamanho:["36","38","40"],cod:"16"},{nome:"CAMISA TRANSPARENTE",preco:"796.00",parcela:"até 5x de R$60,00",cor:["Preto","Vinho"],tamanho:["40","42","44"],cod:"17"},{nome:"POCHETE CLUTH V2",preco:"199.00",parcela:"até 3x de R$66,00",cor:["Preto","Verde"],tamanho:["42","44","46"],cod:"18"}]};var e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];e=function(o){for(var a,c,e=o.length;0!==e;)c=Math.floor(Math.random()*e),a=o[e-=1],o[e]=o[c],o[c]=a;return o}(e);for(var o=0;o<18;o++)o<9&&($("#produtos1").append("<div class='prod'><img src='images/"+t.p[e[o]].cod+".png' alt=''><h2>"+t.p[e[o]].nome+"</h2><h3>R$ "+t.p[e[o]].preco.replace(".",",")+"</h3><p>"+t.p[e[o]].parcela+"</p><div class='button2' data-cod='"+t.p[e[o]].cod+"'><h1>Comprar</h1></div></div>"),8==o&&($("#produtos1").append(" <div id='mais1' class='mais'><p> Carregar Mais </p></div>"),$("#produtos1").append("<div id='produtos2' class='produtos'></div>"))),8<o&&($("#produtos2").append("<div class='prod'><img src='images/"+t.p[e[o]].cod+".png' alt=''><h2>"+t.p[e[o]].nome+"</h2><h3>R$ "+t.p[e[o]].preco.replace(".",",")+"</h3><p>"+t.p[e[o]].parcela+"</p><div class='button2' data-cod='"+t.p[e[o]].cod+"'><h1>Comprar</h1></div></div>"),17==o&&$("#produtos2").append(" <div id='mais2' class='mais'><p> Carregar Menos </p></div>"));$("#mais1 p").on("click",function(){$("#mais1").css("display","none"),$("#mais2").css("display","initial"),$("#produtos2").css("height","fit-content")}),$("#mais2 p").on("click",function(){$("#produtos2").css("height","0"),$("#mais2").css("display","none"),$("#mais1").css("display","initial")});var a,r,s=[],n=0;function p(){0<n&&($(".prods").css("display","initial"),$("#qtd").html(n)),0==n&&$(".prods").css("display","none")}a=JSON.parse(localStorage.getItem("lista")),r=JSON.parse(localStorage.getItem("qtdx")),console.log(n),null!=r&&(s=a,console.log(s)),null!=a&&0<r.qtd&&(console.log(r.qtd),n=parseInt(r.qtd),console.log("\npcar 2º: ",n)),p(),$(".button2").on("click",function(){var o=$(this).attr("data-cod");s[n]=t.p[o-1],n+=1,p();var a={qtd:"0"};a.qtd=n,console.log("\n quantidade : ",a),localStorage.setItem("qtdx",JSON.stringify(a)),console.log("qtd final : ",n),localStorage.setItem("lista",JSON.stringify(s)),console.log("\nlista : ",s)});function i(){$("#ur-car").html("");for(var o=s,a=0,c=0;c<n;c++)$("#ur-car").append('<div class="carr-prod" ><img src="images/'+o[c].cod+'.png" alt=""><div class="carr-txt" ><h1>'+o[c].nome+"</h1> <h2> R$ "+o[c].preco.replace(".",",")+"</h2> <h3>"+o[c].parcela+'</h3> </div> <div id="excluir" class="cp-ex" data-id="'+c+'" ><div class="fclose" > </div> </div> </div>'),a+=parseFloat(o[c].preco);$(".carr-txt2 h1").html("Valor Total R$ "+a.toFixed(2).replace(".",","))}$("#bag").on("click",function(){i(),$("#carrinho").css("top","0%"),setTimeout(function(){$("#carrinho").css("opacity","1")},300)}),$("#close-car").on("click",function(){$("#carrinho").css("opacity","0"),setTimeout(function(){$("#carrinho").css("top","-100%")},300)}),$(document).on("click","#excluir",function(){var o=$(this).attr("data-id");o=parseInt(o);s.splice(o,1),n-=1,localStorage.setItem("qtdx",JSON.stringify(n)),localStorage.setItem("lista",JSON.stringify(s)),i(),p()});var d=[];d.push(0),console.log("\n LISTA CORES: ",d[0]),$("input:radio[name='cores']").change(function(){if($(this).is(":checked")){console.log("\n - valores 1 "+this.id),$("#produtos1").html("");for(var o=0;o<18;o++)this.id!=t.p[o].cor[0]&&this.id!=t.p[o].cor[1]||(console.log("\n id:",t.p[o].nome),$("#produtos1").append("<div class='prod'><img src='images/"+t.p[o].cod+".png' alt=''><h2>"+t.p[o].nome+"</h2><h3>R$ "+t.p[o].preco.replace(".",",")+"</h3><p>"+t.p[o].parcela+"</p><div class='button2' data-cod='"+t.p[o].cod+"'><h1>Comprar</h1></div></div>"))}}),$("input:radio[name='tamanhos']").change(function(){if($(this).is(":checked")){console.log("\n - valores 1 "+this.id);this.id;$("#produtos1").html("");for(var o=0;o<18;o++)valor=t.p[o].tamanho[0],valor2=t.p[o].tamanho[1],valor3=t.p[o].tamanho[2],this.id!=valor&&this.id!=valor2&&this.id!=valor3||(console.log("\n id:",t.p[o].nome),$("#produtos1").append("<div class='prod'><img src='images/"+t.p[o].cod+".png' alt=''><h2>"+t.p[o].nome+"</h2><h3>R$ "+t.p[o].preco.replace(".",",")+"</h3><p>"+t.p[o].parcela+"</p><div class='button2' data-cod='"+t.p[o].cod+"'><h1>Comprar</h1></div></div>"))}}),$("input:radio[name='valores']").change(function(){if($(this).is(":checked")){var o,a,c,e;switch(parseFloat(this.id)){case 50:o=0,a=50;break;case 150:o=51,a=150;break;case 300:o=151,a=300;break;case 500:o=301,a=500;break;case 501:c=501}$("#produtos1").html("");for(var r=0;r<18;r++)o<(e=t.p[r].preco)&&e<a&&(console.log("\n id:",t.p[r].nome),$("#produtos1").append("<div class='prod'><img src='images/"+t.p[r].cod+".png' alt=''><h2>"+t.p[r].nome+"</h2><h3>R$ "+t.p[r].preco.replace(".",",")+"</h3><p>"+t.p[r].parcela+"</p><div class='button2' data-cod='"+t.p[r].cod+"'><h1>Comprar</h1></div></div>")),c<e&&(console.log("\n id:",t.p[r].nome),$("#produtos1").append("<div class='prod'><img src='images/"+t.p[r].cod+".png' alt=''><h2>"+t.p[r].nome+"</h2><h3>R$ "+t.p[r].preco.replace(".",",")+"</h3><p>"+t.p[r].parcela+"</p><div class='button2' data-cod='"+t.p[r].cod+"'><h1>Comprar</h1></div></div>"))}}),$("#ecar-but").on("click",function(){s=[],n=0,localStorage.setItem("qtdx",JSON.stringify(n)),localStorage.setItem("lista",JSON.stringify(s)),i(),p()}),$("input:radio").on("click",function(){$(".rad").each(function(){$(this).attr("checked",!1)})}),$(".button4").on("click",function(){var o=[];$(".button2").each(function(){o.push($(this).attr("data-cod"))}),$("#produtos1").html(""),jQuery.each(o,function(o,a){$("#produtos1").append("<div class='prod'><img src='images/"+t.p[e[a]].cod+".png' alt=''><h2>"+t.p[e[a]].nome+"</h2><h3>R$ "+t.p[e[a]].preco.replace(".",",")+"</h3><p>"+t.p[e[a]].parcela+"</p><div class='button2' data-cod='"+t.p[e[a]].cod+"'><h1>Comprar</h1></div></div>")})})});