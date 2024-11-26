interface Student {
firstName: string,
lastName: string,
age: number,
location: string
}

const student1: Student = {
firstName: 'Thato',
lastName: 'Jones',
age: 32,
location: 'South Africa'
}

const Student2: Student = {
firstName: 'Theo',
lastName: 'Mashego',
age: 26,
location: 'South Africa'
}

const studentList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.bordder = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';



thead.append(th1);
thead.append(th2);

table.append(thead);


studentList.forEach((student) => {
const row: HTMLTableRowElement = document.createElemet('tr');

const column1: HTMLTableCellElement = document.createElement('td');
const column2: HTMLTableCellElement = document. createElement('td');

column1.innerText = student.firstName;
column2.innerText = student.lastName;

column.style.border = '1px solid gray';
column.style.border = '1px solid gray';
column1.style.padding = '.5rem';
column2.style.padding = '.5rem';

row.append(column1);
row.appemd(column2)

table.append(row);
});

body.append(table)
