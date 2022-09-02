//function to create an html element : create the type of element you want
function createNode(element){
    return document.createElement(element);
}

//append the second parameter to the first
function append(p,el){
    return p.appendChild(el);
}

//select the html element
const ul = document.getElementById('imglst');
const url = "https://randomuser.me/api/?gender=female&results=100";

fetch(url).then((response)=>response.json())
.then((data)=>{
    let result = data.results;
    //console.log(result);
    return result.map((obj)=>{
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');   //span to hold the name
        span.innerHTML = `${obj.name.first} ${obj.name.last}`;
        let city = createNode('p'); 
        city.innerHTML =`${obj.location.city}, ${obj.location.country}`; 
        //display the image of the person
        img.src = obj.picture.large;
        append(li,img);     //append the image to the list
        append(li,span);    //append the list to ul
        append(li,city);   //append the city
        append(ul,li);
    });
}).catch((error)=>{console.log(error);})

