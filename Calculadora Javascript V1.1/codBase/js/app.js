var NumOperador=0;
var PrimerOperacion=true;
var RepetirIgual=false;
var Pivote=0

var numero0=document.getElementById("0");
var numero1=document.getElementById("1");
var numero2=document.getElementById("2");
var numero3=document.getElementById("3");
var numero4=document.getElementById("4");
var numero5=document.getElementById("5");
var numero6=document.getElementById("6");
var numero7=document.getElementById("7");
var numero8=document.getElementById("8");
var numero9=document.getElementById("9");


var punto=document.getElementById("punto");
var igual=document.getElementById("igual");
var signo=document.getElementById("sign");
var on=document.getElementById("on");

var menos={btn:document.getElementById("menos"), activo:false}
var mas={btn:document.getElementById("mas"), activo:false}
var por={btn:document.getElementById("por"), activo:false}
var dividido={btn:document.getElementById("dividido"), activo:false}

var display=document.getElementById("display");
display.textContent="0"

//Funciones presionar botones

var Presionar=(function(){
	this.style.height=this.height-2+"px";this.style.width=this.width-2+"px"
});

var Liberar=(function(){
	this.style.height=this.height+2+"px";this.style.width=this.width+2+"px"
});


var LiberarMas=(function(){
	this.style="width: 90%;height: 100%;margin-left: 10px;"
});




on.addEventListener("click",function() 
{
	NumOperador=0
	display.textContent="0"
	PrimerOperacion=true
})

punto.addEventListener("click",function() 
{
	if(display.textContent.includes(".")==false)
	{
		display.textContent=display.textContent+"."
	}
})

signo.addEventListener("click",function() 
{
	display.textContent=display.textContent*-1

})

mas.btn.addEventListener("click",function() 
{
	NumOperador=Calculadora(parseFloat(NumOperador),parseFloat(display.textContent)).sumar()
	display.textContent=""
	mas.activo=true
	menos.activo=false
	por.activo=false
	dividido.activo=false
	RepetirIgual=false
})

menos.btn.addEventListener("click",function() 
{
	if(PrimerOperacion=true) 
	{
		NumOperador=parseFloat(display.textContent)
		PrimerOperacion=false
	}
	else
	{
		NumOperador=Calculadora(parseFloat(NumOperador),parseFloat(display.textContent)).restar()
	}
	display.textContent=""
	mas.activo=false
	menos.activo=true
	por.activo=false
	dividido.activo=false
	RepetirIgual=false
	
})

por.btn.addEventListener("click",function() 
{
	if(PrimerOperacion=true) 
	{
		NumOperador=parseFloat(display.textContent)
		PrimerOperacion=false
	}
	else
	{
		NumOperador=Calculadora(parseFloat(NumOperador),parseFloat(display.textContent)).multiplicar()
	}
	display.textContent=""
	mas.activo=false
	menos.activo=false
	por.activo=true
	dividido.activo=false
	RepetirIgual=false
})

dividido.btn.addEventListener("click",function() 
{
	if(PrimerOperacion=true) 
	{
		NumOperador=parseFloat(display.textContent)
		PrimerOperacion=false
	}
	else
	{
		NumOperador=Calculadora(parseFloat(NumOperador),parseFloat(display.textContent)).dividir()
	}
	display.textContent=""
	mas.activo=false
	menos.activo=false
	por.activo=false
	dividido.activo=true
	RepetirIgual=false
})


igual.addEventListener("click",function() 
{

if(RepetirIgual==false)
{
	Pivote=parseFloat(display.textContent)
	if(mas.activo==true)
	{
		display.textContent=Calculadora(NumOperador,parseFloat(display.textContent)).sumar()
	}else if(menos.activo==true)
	{
		display.textContent=Calculadora(NumOperador,parseFloat(display.textContent)).restar()
	}else if(por.activo==true)
	{
		display.textContent=Calculadora(NumOperador,parseFloat(display.textContent)).multiplicar()
	}else if(dividido.activo==true)
	{
		display.textContent=Calculadora(NumOperador,parseFloat(display.textContent)).dividir()
	}
	
	
	NumOperador=0
}
else
{

	if(mas.activo==true)
	{
		display.textContent=Calculadora(Pivote,parseFloat(display.textContent)).sumar()
	}else if(menos.activo==true)
	{
		display.textContent=Calculadora(parseFloat(display.textContent),Pivote).restar()
	}else if(por.activo==true)
	{
		display.textContent=Calculadora(Pivote,parseFloat(display.textContent)).multiplicar()
	}else if(dividido.activo==true)
	{
		display.textContent=Calculadora(parseFloat(display.textContent),Pivote).dividir()
	}

}

	
	RepetirIgual=true

})

var Escribir=(function(){
	if(display.textContent=="0" && this.id.toString()!="0" && display.textContent.length<8)
	{
		display.textContent=this.id.toString()
	} else if(display.textContent!="0" && display.textContent.length<8){
		display.textContent=display.textContent.toString()+this.id.toString()
	}
});

var Calculadora=(function(num1,num2)
{
	return{
		sumar: function(){
			var resultado=num1+num2
			return parseFloat(resultado.toString().substring(0,8))
		},
		
		restar: function()
		{
			var resultado=num1-num2
			return parseFloat(resultado.toString().substring(0,8))
		},

		multiplicar: function()
		{
			var resultado=num1*num2
			return parseFloat(resultado.toString().substring(0,8))
		},

		dividir: function()
		{
			var resultado=num1/num2
			return parseFloat(resultado.toString().substring(0,8))
		}

	}
});


numero0.onmousedown=Presionar
numero0.onmouseup=Liberar
numero1.onmousedown=Presionar
numero1.onmouseup=Liberar
numero2.onmousedown=Presionar
numero2.onmouseup=Liberar
numero3.onmousedown=Presionar
numero3.onmouseup=Liberar
numero4.onmousedown=Presionar
numero4.onmouseup=Liberar
numero5.onmousedown=Presionar
numero5.onmouseup=Liberar
numero6.onmousedown=Presionar
numero6.onmouseup=Liberar
numero7.onmousedown=Presionar
numero7.onmouseup=Liberar
numero8.onmousedown=Presionar
numero8.onmouseup=Liberar
numero9.onmousedown=Presionar
numero9.onmouseup=Liberar
punto.onmouseup=Liberar
punto.onmousedown=Presionar
igual.onmouseup=Liberar
igual.onmousedown=Presionar
signo.onmouseup=Liberar
signo.onmousedown=Presionar
on.onmouseup=Liberar
on.onmousedown=Presionar
menos.btn.onmousedown=Presionar
menos.btn.onmouseup=Liberar
mas.btn.onmousedown=Presionar
mas.btn.onmouseup=LiberarMas
por.btn.onmousedown=Presionar
por.btn.onmouseup=Liberar
dividido.btn.onmousedown=Presionar
dividido.btn.onmouseup=Liberar





numero0.addEventListener("click",Escribir);
numero1.addEventListener("click",Escribir);
numero2.addEventListener("click",Escribir);
numero3.addEventListener("click",Escribir);
numero4.addEventListener("click",Escribir);
numero5.addEventListener("click",Escribir);
numero6.addEventListener("click",Escribir);
numero7.addEventListener("click",Escribir);
numero8.addEventListener("click",Escribir);
numero9.addEventListener("click",Escribir);