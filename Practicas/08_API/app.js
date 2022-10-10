const consAPI=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/todos/2")
    const json=await res.json();
    let div=document.createElement("div");
    div.className="box";
    div.innerHTML=`<p>User:${json.userId}</p>
                    <p>User:${json.id}</p>
                    <p>User:${json.title}</p>
                    <p>User:${json.completed}</p>`;
        document.body.appendChild(div);
}