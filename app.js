const table = document.querySelector('table');
const input=document.querySelector("input");
const btn=document.querySelector("button");
const heading = document.querySelector("h2");
const api= async (country_name)=>{
       key=`http://universities.hipolabs.com/search?country=${country_name}`
       const data=await fetch(key);
       const realdata=await data.json();
       for(let i=0;i<realdata.length;i++){
           let country = realdata[i].country;
           let university=realdata[i].name;
            
           let tr=document.createElement("tr");
           
        
           let td=document.createElement("td");
            
           table.appendChild(tr);
           tr.appendChild(td);
           tr.appendChild(td);

           heading.innerText =  country;
           td.innerText = university;
         }
}


btn.addEventListener('click',(e)=>{
    const val=input.value;
    api(val);
})
