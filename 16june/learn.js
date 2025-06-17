const products = [
    {name:"laptop",price:100,category:"Electronic"},
    {name:"phone",price:10,category:"Electronic"},
    {name:"table",price:100,category:"furniture"},
    {name:"shirt",price:50,category:"cloth"},
]

const electronics = products.filter(p=>p.category=='Electronic');
console.log(electronics);

function aggregateScoresBySkill(students, skill) {
 const ans = students.filter(s=>s.category.includes(skill))
  .map(s=>s.price)
  .reduce((total,score)=>total+score);

  console.log(ans);
}

aggregateScoresBySkill(products,"Electronic");


