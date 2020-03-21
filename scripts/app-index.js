$(document).ready(function() {
    $('select').formSelect();
});



render = () =>{
    data = getAllEmployees()
    if(!data){
        document.getElementById('options').innerHTML = '<option value="" disabled selected>Employee</option>'+"<option disabled>Please add Employee First</option>"
    }
    else{
        let options = '<option value="" disabled selected>Employee</option>'
        
        for(let i=0; i<data.length; i++){
            options+=`

            <option value="${data[i].id}">${data[i].name}</option>
            
            `

        }
        

        document.getElementById('options').innerHTML = options
    }
}

document.getElementById('addRecord').addEventListener('click', (e)=>{

    e.preventDefault()

    let employee_id = document.getElementById('options').value
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let days = document.getElementById('days').value
    let overtime = document.getElementById('overtime').value

    

    let record = new Payroll(getEmployee(employee_id), year, month, days, overtime)



})

render()