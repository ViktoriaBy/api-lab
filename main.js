let btn = document.querySelector('.button1')
    

function btnClick(){
    console.log('clicked btn')
}


axios.get('https://swapi.dev/api/planets/2')

//Loop through residents array
  .then(res =>{
     for(let i=0; i < res.data.residents.length; i++){
        axios.get(res.data.residents[i]) //get residents name by index
     .then((res) => {  
    console.log(res.data.name)
       
    //the way you create a new element and append it to to the document
    //https://www.w3schools.com/jsref/met_document_createtextnode.asp
    
    let h2 = document.createElement('h2');
    let txt = document.createTextNode(`${res.data.name}`);
    h2.appendChild(txt);
    document.body.appendChild(h2); 
  
        
     });
    }
});

btn.addEventListener('click', btnClick)
