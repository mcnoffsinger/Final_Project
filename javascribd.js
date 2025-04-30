
//setting up some variables
const submit = document.getElementById("submit")
const table = document.getElementById("taskManager")

//making the table look better
table.setAttribute("border","1px solid")
table.setAttribute("width","90%")

submit.addEventListener("click",addTask)
    
//collection of all the tasks
let TaskList = []

//will assign a unique ID to each task
let TaskCounter = 0


//contructor for what a task is
class Task{
    constructor(name,priority, importance,date, delID,done){
    this.name = name
    this.priority = priority
    this.importance = importance
    this.date = date
    this.done = done
    this.delID = delID
    
    }

}



function addTask(){

    //add new rows
    let name = document.getElementById("input").value
    let priority = document.getElementById("priority").value
    let important = document.getElementById("important").checked
    
    

    TaskList.push(new Task(name, priority,important, Date().slice(0,10),"ID"+ String(TaskCounter),false))
    TaskList.sort((a,b)=>(b.priority-a.priority))
    TaskCounter += 1
    


    function Draw(){
        console.log("Someone manipulated the tasks")
        for (task of TaskList){
            
            console.log(JSON.stringify(task))

        }

        //clear current rows
        table.innerHTML = ""



        

        //redraw all of the rows
        

        for (task of TaskList){
            let taskIsDone = false
            let newRow = document.createElement("tr")
        

            let nameData = document.createElement("td")
            nameData.append("Task Name:"+ task.name)
            newRow.appendChild(nameData)
        
            let priorityData = document.createElement("td")
            switch(task.priority){
                case "1":priorityData.append("Task Priority: Low     ");break;
                case "2":priorityData.append("Task Priority: Medium  ");break;
                case "3":priorityData.append("Task Priority: High    ");break;
            }
            newRow.appendChild(priorityData)

            let datedata = document.createElement("td")
            datedata.innerHTML = "Date added: "+ task.date;
            newRow.appendChild(datedata)

            let deletedata = document.createElement("td")
            deletedata.append("Done?")
            

            let checkboxdata = document.createElement("input")
            checkboxdata.setAttribute("type","checkbox")
            checkboxdata.setAttribute("id",task.delID)
            
            if (task.done == true){
                checkboxdata.setAttribute("checked","true")
                taskIsDone = true

            }else{
                checkboxdata.setAttribute("checked","false")
            }


            checkboxdata.addEventListener("click", function(){
                
                for (subtask of TaskList){
                    
                    if (subtask.delID == this.id ){
                        if (subtask.done == false){
                        subtask.done = true
                        }else{
                            subtask.done = false


                    }
                        
                    }
                    
                }
                //redraw all of the rows
                Draw()


            })

            deletedata.append(checkboxdata)
            

            newRow.appendChild(deletedata)


            let deletebutton = document.createElement("button")
            deletebutton.textContent = "Delete"
            deletebutton.setAttribute("id","Del" + task.delID)
            deletebutton.addEventListener("click",function(){
                for (subtask of TaskList){
                    if ("Del"+ subtask.delID == this.id){
                    //I forgot how to add two arrays together

                        
                        let backtask = TaskList.slice(TaskList.indexOf(subtask)+1)
                        TaskList = TaskList.slice(0,TaskList.indexOf(subtask)) 
                        for (x of backtask){
                            TaskList.push(x)
                        }
                        Draw()
                    }
                }



            })
            let actualdeletedata = document.createElement("td")
            actualdeletedata.appendChild(deletebutton)

            newRow.appendChild(actualdeletedata)

            

            if (task.importance == true){
                newRow.style.backgroundColor = "#689564"
            }

            if (taskIsDone){
                newRow.style.textDecoration = "line-through"
            }

            

        
        
        
        
        
        
        
            table.appendChild(newRow)
        }
        
            

        }
    Draw()
    













    //console.log(JSON.stringify(TaskList[0]))//THIS WORKS




    /*
    let newRow = document.createElement("tr")
    

    let nameData = document.createElement("td")
    nameData.append(name)
    newRow.appendChild(nameData)

    let priorityData = document.createElement("td")
    priorityData.append()







    table.appendChild(newRow)
    */


    
}