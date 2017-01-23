let output;
let temp1 = 0;
let temp2 = 0;
module.exports = (n1, n2) =>
{
  temp1 = n1;
  temp2 = n2;
  if (n1 < 0 || n2 < 0)
  {
    output = NaN;
  }
  else
  {
    while(temp1 !== temp2)
    {
        if(n1 > n2)
        {
          temp1 = temp1 - 1;
        }
        else
        {
            temp2 = temp2 - 1;
        }
    }
    output = temp1;
  }
return output;
};
