fetch("https://randomuser.me/api/?results=1")
.then((response=>{

    if(response.ok){
        return response.jason();
    }
    else{
        throw new Error("Website is error")
    }
}

.then(date=>{
    console.log(data.results);
    display(data.results);
}
)
.catch((error=>console.error("Fetch Error",error));
function display(data){
    const name = data[0].namefirst;
    const namediv =document.getelementById("name1")
    namediv.innerHTML = name;

}

