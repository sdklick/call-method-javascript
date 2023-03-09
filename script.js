// How to use call method in javascript

const customer1={
    name:"sumanta das",
    age:100,
    alldetail:function(){
     console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}

const customer2={
    name:'rahul roy',
    age : 200
    //here need the customer 1 function
}

//normal call to get customer1

customer1.alldetail()

//here the call method called

customer1.alldetail.call(customer2)