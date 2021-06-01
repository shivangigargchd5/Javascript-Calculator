var display = document.getElementById('result');
var operand1=0;
var operator=null;
var operand2=0;
var buttons = document.getElementsByClassName('box');
     for(var i=0;i<buttons.length;i++)
     {
        buttons[i].addEventListener('click',function(){
            var value = this.getAttribute('data-value');
            if(value=='AC')
            {
                display.innerText = " ";
            }
            else if(value=='+/-')
            {
                var dis = parseFloat(display.textContent);
                dis = -1*dis;
                display.innerText = dis;
            }
            else if(value=='%')
            {
                var percent = parseFloat(display.textContent);
                percent = percent/100;
                display.innerText = percent;
            }
            else if(value=='+')
            {
                operator='+';
                operand1 = parseFloat(display.textContent);
                display.innerText = " ";
            }
            else if(value=='-')
            {
                operator='-';
                operand1 = parseFloat(display.textContent);
                display.innerText = " ";
            }
            else if(value=='*')
            {
                operator='*';
                operand1 = parseFloat(display.textContent);
                display.innerText = " ";
            }
            else if(value=='/')
            {
                operator='/';
                operand1 = parseFloat(display.textContent);
                display.innerText = " ";
            }
            else if(value=='=')
            {
                operand2 = parseFloat(display.textContent);
                console.log(operand2);
                var result = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = result;

            }

            else{
                display.innerText+=value;
            }  

     });

    } 
   
  




