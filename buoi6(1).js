var js_Class = 
[
  {name: 'Hoang', age: 17},
  {name: 'Giang', age: 22},
  {name: 'Lương', age: 16},
  {name: 'Khôi', age: 16},
  {name: 'Minh', age: 10},
  {name: 'Trung', age: 16},
  {name: 'Lan', age: 14},
  {name: 'Nam Anh', age: 16}
]
let total_Age = 0;
for (i=0; i<js_Class.length; i++)
{
  total_Age = total_Age + js_Class[i].age;
}
console.log(total_Age)