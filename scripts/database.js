const getAllEmployees = () => {
    return JSON.parse(localStorage.getItem('employees'))
}

const setEmployee = (data) => {
    localStorage.setItem('employees', JSON.stringify(data))
}

const addEmployee = (item) => {
    data = getAllEmployees()
    if (data) {

        data.push(item)
        setEmployee(data)
    }
    else {
        data = []
        data.push(item)
        setEmployee(data)
    }
}

const removeEmployee = (id) => {
    data = getAllEmployees()
    data = data.filter((item) => item.id != id)
    setEmployee(data)
}

const getLength = () => {
    if (getAllEmployees()) {
        return getAllEmployees().length
    }
    else{
        return 0
    }
}

const clearDatabase = () => {
    localStorage.removeItem('employees')
}