let arr = [] ; 


arr.push({
    name : "mohamed elaraby" , 
    email: "mohamed@gmail.com" , 
    age  : 21 ,

    getData : function(){
        console.log(this.name , this.email , this.age) ; 
    }
})

arr.push({
    name: "abdelrhman hany",
    email: "abdelrhmanhany2003@gmail.com",
    age: 21,

    getData : function(){
        console.log(this.name,this.email,this.age);
    }

})

arr[0].getData() ; 
let student1 = JSON.stringify(arr[0]) ; 
window.localStorage.user1 = student1 ; 

arr[1].getData();
let student2 = JSON.stringify(arr[1]);
window.localStorage.user2 = student2;
