// localStorage.tasks = JSON.stringify([]);
updateList();

function addEvent(){
    //takes  value from input 

    var input = document.getElementById("Task_input").value;


    //take taska from local storage and store ul [will be array]

    var tasksArr = JSON.parse(localStorage.tasks);


    //push(new inuput data) into array

    tasksArr.push(input);


    //update that array to local storage

    localStorage.tasks = JSON.stringify(tasksArr);


    //empty the input box

    input.value = "";


    //update list
    updateList();
}

function updateList(){
    //get reference of ul

    var ul = document.getElementById("tasks");

    //get taska from local storage
    var tasksArr = JSON.parse(localStorage.tasks);
    var length = tasksArr.length - 1;
    var html = "";

    for (let i = length; i >= 0; i--) {
       html +='<li class="list-group-item" id="' + i + '">' + tasksArr[i] + '<span class="btn btn-danger btn-sm spanbtn" onclick="removeItem(this)">Remove</span></li>'; 
     }


     ul.innerHTML = html;
}



function removeItem(span_tag){
    //getting id
    var index_id = span_tag.parentElement.id;

    //getting array tasks
    var tasksArr = JSON.parse(localStorage.tasks);

    // update array afetr removing the items
    tasksArr.splice(index_id,1);

    //updating the array om local storage
    localStorage.tasks = JSON.stringify(tasksArr);

    //Calling the updaing function
    updateList();
}