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


on.addEventListener("click",function() 
{
	NumOperador=0
	display.textContent="0"
	PrimerOperacion=true
})

punto.addEventListener("click",function() 
{
	display.textContent=display.textContent+"."
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