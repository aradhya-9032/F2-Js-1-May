
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];

  function PrintStudentswithMap(){
    arr.map(function(obj){
    if(obj.marks > 50){
      console.log(obj);
    }
  });
  }
//   PrintStudentswithMap();  function invoking

  function PrintStudentsbyForEach(){
  arr.forEach(function(obj){
    if(obj.marks > 50){
        console.log(obj);
    }
  });
  }
//  PrintStudentbyForEach();  function invoking

  function addData(){
    let newObj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(newObj);
    console.log(arr);
  }
//  addData(); function invoking

 function removeFailedStudent() {
  for(let i = arr.length-1; i>=0; i--){
    if(arr[i].marks <= 50){
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
// removeFailedStudent(); function invoking

function concatenateArray(){
    let arr1 = [
       { id: 4, name: "Arvi", age: "22", marks: 85 },
       { id: 5, name: "Sam", age: "28", marks: 80 },
       { id: 6, name: "Samarvi", age: "24", marks: 45 },
     ];
    let arr2 = arr.concat(arr1);
    console.log(arr2);
}
// ConcatenateArray()  function invoking