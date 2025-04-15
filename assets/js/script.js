const addbtn=document.getElementById("add-btn");
const space=document.querySelector(".spacing");

addbtn.addEventListener("click", ()=>{
  const new_task=document.createElement("div");
  const name=document.createElement("label");
  const inp=document.createElement("textarea");
  const br=document.createElement("br");
  const del=document.createElement("button");
  const save=document.createElement("button");

  new_task.classList.add("animate__animated", "animate__zoomInDown", "animate__fast", "task-container");
  name.id="n";
  inp.id="i";
  save.id="save-btn";
  del.id="delete-btn";

  del.innerHTML="Delete";
  save.innerHTML="Save";
  name.innerHTML="Task:<br>";
  inp.rows="1";
  inp.placeholder=" Enter your task...."

  new_task.appendChild(name);
  new_task.appendChild(inp);
  new_task.appendChild(br);
  new_task.appendChild(save);
  new_task.appendChild(del);
  space.appendChild(new_task);

  inp.addEventListener("input", ()=>{
    inp.style.height="auto";
    inp.style.height=inp.scrollHeight+"px";
  });

  del.addEventListener("click", ()=>{
    new_task.classList.add("animate__zoomOutDown", "animate__faster");
    new_task.addEventListener("animationend", ()=>{
      new_task.remove();
    });
  });

  save.addEventListener("click", ()=>{
    const taskText=inp.value;
    const t=document.getElementById("tasks");
    if(t && taskText!=""){
      t.innerHTML+=taskText+"<br>";
    }
    
    new_task.classList.add("animate__fadeInDown");
    new_task.addEventListener("animationend", ()=>{
      new_task.remove();
    });
  });
});