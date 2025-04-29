const submit = document.getElementById("submit")
const table = document.getElementById("taskManager")

submit.addEventListener("click",addTask)
    

let TaskList = []


class Task{
    constructor(name,priority, importance,date){
    this.name = name
    this.priority = priority
    this.importance = importance
    this.date = date
    this.done = false
    }

}



function addTask(){

    //clear current rows



    //add new rows
    let name = document.getElementById("input").value
    let priority = document.getElementById("priority").value
    let important = document.getElementById("important").checked
    let date 
    

    TaskList.push(new Task(name, priority,important, "4/20/69"))
    TaskList.sort((a,b)=>(b.priority-a.priority))

    for (task of TaskList){
        let newRow = document.createElement("tr")
    

        let nameData = document.createElement("td")
        nameData.append("Task Name:"+ task.name)
        newRow.appendChild(nameData)
    
        let priorityData = document.createElement("td")
        switch(task.priority){
            case "1":priorityData.append("Task Priority: Low     ")
            case "2":priorityData.append("Task Priority: Medium  ")
            case "3":priorityData.append("Task Priority: High    ")
        }
        newRow.appendChild(priorityData)
    
    
    
    
    
    
    
        table.appendChild(newRow)
        

    }
    













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