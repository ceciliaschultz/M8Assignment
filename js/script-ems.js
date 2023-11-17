// M8 Assignment
// Maria Cecilia Schultz

const $ = (id) => document.getElementById(id)

// GET DOM ELEMENTS
let form = $('addForm')
let empTable = $('empTable')

// CREATE AN ARRAY OF EMPLOYEES
let storage
let employee
let employees = []


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const initialLoad = () => {
    // IF THERE ARE NO EMPLOYEES IN ARRAY, CHECK STORAGE
    if (employees.length === 0) {
        // GET EMPLOYEES FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
        storage = localStorage.getItem('employees') || ''
		
        // IF NOT EMPTY, CONVERT TO ARRAY AND STORE IN TASKS VARIABLE
        if (storage.length > 0) {
            employees = JSON.parse(storage)
        } else {
            // build initial 5 employees
            employees.push([11111111,'Maria C Schultz',7401,'maria.schultz@acme.com', 'Marketing'])
            employees.push([22222222,'Peter Pembroke',7402,'peter.pembroke@acme.com', 'Executive'])
            employees.push([33333333,'Sally Sheers',7403,'sally.sheers@acme.com', 'Administrative'])
            employees.push([44444444,'Paul Parker',7404,'paul.parker@acme.com', 'Administrative'])
            employees.push([55555555,'Carl Carson',7405,'carl.carson@acme.com', 'Sales'])

        }
    }
    
    buildGrid()
}


// ADD EMPLOYEE
const addEmployeeHandler= (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault(); 

    // GET VALUES FROM TEXT BOXES
    let idValue = $('id').value
    let nameValue = $('name').value
    let extensionValue = $('extension').value
    let emailValue = $('email').value
    let departmentValue = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employee = [idValue, nameValue, extensionValue, emailValue, departmentValue]
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee)
    
    // BUILD THE GRID
    buildGrid()

    // refresh Employee  count
    refreshEmployeeCount()
    
    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

}


// DELETE EMPLOYEE
const deleteEmployeeHandler = (e) => {
    let elementClicked= e.target;  // this is HTMLButtonElement if the delete button is clicked
    let isButtonClicked = elementClicked instanceof HTMLButtonElement  // was the delete button clicked?

    // Proceed with employee deletion only if the delete button was clicked
    if (!isButtonClicked) {
        return; 
    }

    // Delete button was clicked, proceed
    if (confirm('Are you sure you want to delete this employee record?')) { // confirm proceed with employee deletion
         // get row index for the row clicked
         // note this will be 1 for the first td because the header th counts
        let rowIdx = elementClicked.parentElement.parentElement.rowIndex;

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIdx-1,1) 

        refreshEmployeeCount()      // refresh employee count display

        // BUILD THE GRID
        buildGrid()
    }

}


// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // remove all children within tbody (<tr> elements)
    let tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    // REBUILD TBODY CONTENTS FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    let tempEmp
    for (let i= 0; i < employees.length; i++){
        tempEmp = employees[i]
        tbody.insertRow().innerHTML = 
         "<tr><td>" +tempEmp[0]+ "</td>"
        + "<td>" +tempEmp[1]+ "</td>"
        + "<td>" +tempEmp[2]+ "</td>"
        + "<td>" +tempEmp[3]+ "</td>"
        + "<td>" +tempEmp[4]+ "</td>"
        + "<td><button class='btn btn-danger btn-sm float-end'>X</button></td>"
        + "</tr>"
    }

    // UPDATE EMPLOYEE COUNT
    refreshEmployeeCount()

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
}


// Refresh the Employee count display
function refreshEmployeeCount() {
    let empCount = employees.length  // subtract 1 to account for table header 

    // display employee count only if there are employees
    let empCountValue = "" // init
    if (empCount>0) {  
        empCountValue= `(${empCount})` 
    } 
    $('empCount').value = empCountValue
}


// WIRE UP EVENT HANDLERS 
// AND DISPLAY ANY TASKS IN LIST
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    form.addEventListener('submit', addEmployeeHandler)
    empTable.addEventListener('click', deleteEmployeeHandler)
    initialLoad()
})