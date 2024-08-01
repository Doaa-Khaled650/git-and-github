let arr = [] ; 


arr.push({
    name : "mohamed elaraby" , 
    email: "mohamed@gmail.com" , 
    age  : 21 ,

    getData : function(){
        console.log(this.name , this.email , this.age) ; 
    }
})

arr[0].getData() ; 
let student1 = JSON.stringify(arr[0]) ; 
window.localStorage.user1 = student1 ; 