
render = () => {
    data = getAllEmployees()

    if (data.length==0) {
        document.getElementById('no-data').innerHTML = 'No records found!'
    }
    else {
        let display = ''

        for (let i = 0; i < data.length; i++) {
            display += `

            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].designation}</td>
                <td>${data[i].salary}</td>
                <td><button class="waves-effect waves-light btn red accent-2" onclick="remove(${data[i].id})">Delete</button></td>

            </tr>
            
            `
        }

        document.getElementById('employee_data').innerHTML = display
    }
}

remove = (id) => {
    removeEmployee(id)
    render()
}
render()


document.getElementById('addEmployee').addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let designation = document.getElementById('designation').value
    let salary = document.getElementById('salary').value
    let id = Math.floor(Math.random() * 1000000)

    if (!name || !designation || !salary) {
        alert("All the infromation must be provided!")
    }
    else {
        let emp = new Employee(id, name, designation, salary)
        addEmployee(emp)
        render()
    }
})
