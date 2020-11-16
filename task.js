var arr = [];
var arr2 = [];
var TodoTask, CompletedTask;
taskadd = function (taskname) {
    this.taskname = taskname;
}
function task() {
    var taskname = document.getElementById("txt").value;
    tasks = new taskadd(taskname);
    for(i=0;i<arr.length;i++) {
        if (arr[i].taskname==taskname) {
            alert("Task Already Added");
            return;
        }
    }
    arr.push(tasks);
    
    document.getElementById('txt').value="";
    console.log(arr);
    show();
}
//display function for To do:
function show() {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        result += "<tr><td>"+i+"</td><td>" + arr[i].taskname + "\
</td><td><input type='checkbox' class='form-check-input' onclick='check("+ i + ")' id='check'>\
<input type='text' class='form-control' id='textt"+i+"' value=''></td><td>\
<button class='btn btn-danger m-2' onclick='del(" + i + ")'>Delete</button>\
<button class='btn1 btn btn-success' id='eid" + i + "' onclick='edit(" + i + ")'>Edit</button>\
<button id='id" + i + "' class='btn2 btn btn-success' onclick='update(" + i + ")'>Edit</button>" +
            ""
        "</td></tr>";
    }
   
    document.getElementById("table1").innerHTML = result;
}
//update
function update(m) {
    var taskk = document.getElementById("textt"+m).value;
    TodoTask = {
        taskname: taskk
    };
    for (var i = 0; i < arr.length; i++) {
        if (arr[m] == arr[i]) {
            arr[i] = TodoTask;
        }
    }
    show();
    document.getElementById("eid" + m).style.display = "inline-block";
    document.getElementById("id" + m).style.display = "none";
    document.getElementById("textt"+m).value="";
}


function update1(m) {;
    var taskk1 = document.getElementById("text"+m).value;
    CompletedTask = {
        checkname: taskk1
    };
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[m] == arr2[i]) {
            arr2[i] = CompletedTask;
        }
    }
    dis();
    document.getElementById("eid" + m).style.display = "inline-block";
    document.getElementById("id" + m).style.display = "none";
    document.getElementById("text"+m).value="";
}

//delete function
function del(n) {
    arr.splice(n, 1);
    console.log(arr);
    show();
}

function del1(n) {
    arr2.splice(n, 1);
    console.log(arr2);
    dis();
}

//edit fucntion 
function edit(j) {
    document.getElementById("textt"+j).value = arr[j].taskname;
    document.getElementById("eid" + j).style.display = "none";
    document.getElementById("id" + j).style.display = "inline";
}

function edit1(j) {
    document.getElementById("text"+j).value = arr2[j].checkname;
    document.getElementById("eidd" + j).style.display = "none";
    document.getElementById("idd" + j).style.display = "inline";
}
function check(k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[k]) {
            TodoTask = {
                checkname: arr[i].taskname
            };
            arr2.push(TodoTask);
        }
    }
    dis();
    del(k);

}
//display completed task
function dis() {
    var result = '';
    for (var i = 0; i < arr2.length; i++) {
        result += "<tr><td>"+i+"</td><td>" + arr2[i].checkname + "\
        </td><td><input type='checkbox' class='form-check-input' onclick='check2("+ i + ")' id='check2' checked>\
        <input type='text' class='form-control' id='text"+i+"' value=''></td><td>\
        <button class='btn btn-danger m-2' onclick='del1(" + i + ")'>Delete</button>\
        <button class='btn1 btn btn-success' id='eidd" + i + "' onclick='edit1(" + i + ")'>Edit</button>\
        <button id='idd" + i + "' class='btn2 btn btn-success' onclick='update1(" + i + ")'>Edit</button>" +
                    ""
                "</td></tr>";
    }
    document.getElementById("table2").innerHTML = result;
}

function check2(l) {
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] == arr2[l]) {
            CompletedTask = {
                taskname: arr2[i].checkname
            };
            arr.push(CompletedTask);
        }
    }
    show();
    del1(l);
}