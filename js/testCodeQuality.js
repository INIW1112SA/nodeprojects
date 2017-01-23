//GCD calculator
let log4js = require('log4js');
let logger = log4js.getLogger();
function calculateGCD(n1, n2)
{ 
  let gcd;
  let num1 = Math.round(n1);
  let num2 = Math.round(n2);
  for(let i=1;i <= num1 && i <= num2; i+1)
  {
    if(num1%i==0 && num2%i==0)
    {
       gcd=i;
    }
  }
  logger.debug(gcd);
	
}
calculateGCD(5, 10);