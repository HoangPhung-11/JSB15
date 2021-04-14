let number = prompt('Insert the number of column');
var line= "";
for (i=1; i<=number; i++)
{
  for (y=0;y<i;y++)
  {
    line += "*";
  }
  line = line + '\n'
}