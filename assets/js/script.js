// const addbtn=document.getElementById("add-btn");
// const space=document.querySelector(".spacing");

// addbtn.addEventListener("click", ()=>{
//   const new_task=document.createElement("div");
//   const name=document.createElement("label");
//   const inp=document.createElement("input");
//   const br=document.createElement("br");
//   const del=document.createElement("button");
//   const save=document.createElement("button");

//   new_task.classList.add("animate__animated", "animate__rubberBand", "animate__fast", "task-container");
//   name.id="n";
//   inp.id="i";
//   save.id="save-btn";
//   del.id="delete-btn";

//   del.innerHTML="Delete";
//   save.innerHTML="Save";
//   name.innerHTML="New Task:<br>";
//   name.style.userSelect="none";
//   // inp.rows="1";
//   inp.placeholder=" Enter your task...."
//   inp.style.userSelect="none";
//   new_task.style.userSelect="none";

//   new_task.appendChild(name);
//   new_task.appendChild(inp);
//   new_task.appendChild(br);
//   new_task.appendChild(save);
//   new_task.appendChild(del);
//   space.appendChild(new_task);

//   inp.addEventListener("input", ()=>{
//     inp.style.height="auto";
//     inp.style.height=inp.scrollHeight+"px";
//     inp.maxLength="30";
//   });

//   del.addEventListener("click", ()=>{
//     new_task.classList.add("animate__zoomOutDown", "animate__faster");
//     new_task.addEventListener("animationend", ()=>{
//       new_task.remove();
//     });
//   });

//   save.addEventListener("click", ()=>{
//     const taskText=inp.value;
//     const t=document.getElementById("tasks");

//     if(taskText!=""){
//       const each_task=document.createElement("div");
//       const task_del=document.createElement("button");
//       // const done=document.createElement("button");

//       // done.className="done-btn";
//       task_del.className="del-btn";
//       each_task.className="each-task";
//       each_task.style.marginTop="10px";
//       each_task.classList.add("animate__animated", "animate__zoomInDown");
      
//       each_task.innerHTML="<input type='checkbox' class='check-btn'>"+taskText;
//       const img=document.createElement('img');
//       img.src='assets/Images/delete.png';
//       img.id="del-img";

//       task_del.addEventListener("click", ()=>{
//         each_task.classList.add("animate__zoomOutLeft");
//         each_task.addEventListener("animationend", ()=>{
//           each_task.remove();
//         });
//       });

//       // each_task.appendChild(done);
//       task_del.appendChild(img);
//       t.appendChild(each_task);
//       each_task.appendChild(task_del);
//     }
    
//     // close the div
//     new_task.classList.add("animate__zoomOut");
//     new_task.addEventListener("animationend", ()=>{
//       new_task.remove();
//     });
//   });
// });


const h_div=document.getElementById("h");
const save=document.createElement("button");

save.innerHTML="<img src='assets/Images/enter.png'>";
save.id="save-btn";

save.addEventListener("click", ()=>{
  const inp=document.getElementById("inp");
  const inp_val=inp.value;
  const t=document.getElementById("tasks");
  
  if(inp_val!=""){
    const each_task=document.createElement("div");
    const task_del=document.createElement("button");

    task_del.className="del-btn";
    each_task.className="each-task";
    each_task.style.marginTop="10px";
    each_task.classList.add("animate__animated", "animate__fast", "animate__lightSpeedInRight");
    
    each_task.innerHTML="<input type='checkbox' class='check-btn'>"+"'"+inp_val+"'";
    const img=document.createElement('img');
    img.src='assets/Images/delete.png';
    img.id="del-img";

    task_del.addEventListener("click", ()=>{
      each_task.classList.remove("animate__lightSpeedInRight");
      each_task.classList.add("animate__fadeOutDown");
      each_task.addEventListener("animationend", ()=>{
        each_task.remove();
      });
    });

    task_del.appendChild(img);
    t.appendChild(each_task);
    each_task.appendChild(task_del);
    inp.value="";
  };
});

h_div.appendChild(save);