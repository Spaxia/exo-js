function calc ()
{
var a = prompt("1er nombre:");
var calcule = prompt("Do you want to multiply, divide, add, or subtract?");
var b = prompt("2nd nombre:");
var x;  


   if (a == "" || b == "" || calcule == "" )
   {
	   return alert ("rien");
   }

a = parseInt (a, 10);
b = parseInt (b, 10);

    switch (calcule)
	{
	
    case '+':
     x = a + b;
	 break;
  
   case '-':
     x = a - b;
	 break;
  
   case '*':
     x = a * b;
	 break;
 
   case '/' :  
		 
       x = a / b ;
	   break;
  
     default: 
     x = ("raf" ) ;
	 break;
   }
  alert(x);
}
calc ();