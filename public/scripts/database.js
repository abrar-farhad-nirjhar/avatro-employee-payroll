const getAllEmployees = () => {
    if(localStorage.getItem('employees')){
    return JSON.parse(localStorage.getItem('employees'))}
    else{
        return []
    }
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

const getEmployee = (id) => {
    data = getAllEmployees()
    data = data.filter((item) => item.id == id)
    return data[0]
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






const getAllPayrolls = () => {
    return JSON.parse(localStorage.getItem('payrolls'))
}

const setPayroll = (data) => {
    localStorage.setItem('payrolls', JSON.stringify(data))
}

const addPayroll = (item) => {
    data = getAllPayrolls()
    if (data) {

        data.push(item)
        setPayroll(data)
    }
    else {
        data = []
        data.push(item)
        setPayroll(data)
    }
}



// const clearDatabase = () => {
//     localStorage.removeItem('payrolls')
// }



