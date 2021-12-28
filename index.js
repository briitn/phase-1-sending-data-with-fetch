// Add your code here
dogObj={dogName:"Jason",
dogBreed:"Hound"}
const configurationObject= {method:"POST",
headers:{
    'Content-Type':"application/json",
    Accept:'application/json',
},
body:JSON.stringify(dogObj)
    
}
fetch ('http://localhost:3000/dogs',configurationObject)
.then(res=>res.json())
.then (obj=>{console.log(obj)});

/*const userData={
    name:'Prince',
    email:'prince@gmail.com'
}*/
//const fetchStuff={ 
    

function submitData(){
    return fetch('http://localhost:3000/users',{method:"POST",
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json'},
    
    body:JSON.stringify({
        name:"Steve",
        email:'steve@steve.com',

    })
})
       
    .then(res=>res.json())
    .then(obj=>{let p=document.createElement('p');
    p.innerHTML=obj.id
document.body.append(p)})
   
    .catch(function(error){let h3= document.createElement('h3')
h3.innerHTML=error.message; document.body.append(h3)}
    )
    
}
submitData()