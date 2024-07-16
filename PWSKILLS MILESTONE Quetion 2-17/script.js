
console.log("-----------------Calculator----------------- ")

const calculator = (n1,n2,op)=>{
    let result;
    switch(op){
        case '+':
            result = n1 + n2;
            break;
        
        case '-':
            result = n1 - n2;
            break;
        
        case '*':
            result = n1 * n2;
            break;
        
        case '/':
            result = n1 / n2;
            break;
        default:
            console.log("Invalid Operator");
            return;
        
    }
    console.log("Result: "+result);
}

console.log(3,4,'+');
console.log(3,4,'*');
console.log(3,4,'/');
console.log(3,4,'-');

const colormixer = (c1,c2)=>{
    let result;
    switch(c1,c2){
        case 'red','blue':
            result = 'purple';
            break;
        
        case 'red','yellow':
            result = 'orange';
            break;
        
        case 'yellow','blue':
            result = 'green';
            break;
        
        
        default:
            console.log("Invalid color options");
            return;
        
    }
    console.log("Result: "+result);
}

function findHighestMarks(marks) {
    if (marks.length === 0) {
        console.log("No marks provided.");
        return;
    }

    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    console.log("The highest marks scored by a student are:", highestMarks);
}

// let marks = [85, 92, 78, 90, 88];
// findHighestMarks(marks);

function capitalizeEveryFirstLetter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// console.log(capitalizeEveryFirstLetter("gurdev singh dhanjal"))

const vowels = (string) =>{
    let count = 0;
    let vowel = ['a','e','i','o','u'];
    for(let i =0; i<string.length;i++){
        for (let j = 0;j<vowel.length;j++){
            if(string[i] == vowel[j]){
                count = count+1;
                // console.log('vowel is:'+vowel[j] +' and present at index '+i+1);
            }
        }
    }
    return count;

}
// console.log(vowels('gurdev singh dhanjal'))


const removeItem = (items) =>{
    let newArray = [new Set(items)]
    return newArray;
}

// console.log(removeItem(['tomato','apple','banana','tomato','papaya','banana']));

const triangle = (k) => {
    for (let i = k; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        process.stdout.write('*'); 
      }
      console.log();
    }
  };
  
//   triangle(6);

const divisibility = (arr1) => {
    let array = [];
    for(let i = 0 ; i<arr1.length;i++){
        if(arr1[i]%3 ==0 && arr1[i]%2!=0){
            array.push(arr1[i])
            continue;
        }
    }    
    return array;
}
const arr1 = [3,5,9,6,12,15]
// console.log(divisibility(arr1));

const bugCorrector = (arr)=>{
    return arr.map((item)=>
        item = item*2
    )
}

// console.log(bugCorrector(arr1));

const farenheit = (celcius) =>{
    return celcius.map((temp)=>{
        temp = (9/5)*temp + 32;
        return temp
    })

}

const temperature = [36,32,1,65,40];
console.log(farenheit(temperature));

const carrental = (days,type) => {
    let result;
    switch(type){
        case 'economy':
            result = 4000*days;
            break;
        case 'midsize':
            result = 5000*days;
            break;
        case 'luxury':
            result = 20000*days;
            break;
        default:
            console.log('Invalid Input'); 
            break;
    }
    return result

}
console.log(carrental(5,'economy'));

const bill = (dish,people) => {
    let totalBill = dish;
    let bill_person = totalBill/people

    return {
        "total bill": totalBill,
        "bill per person": bill_person,
    }

}


console.log(bill(5000,10))


const calculateTotalCost = (cart) => cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 5, quantity: 1 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); 


const discounted = (discouunt,price) =>{
    const discounted_price = price - discouunt;
    return (discounted_price/price)*100 


}

console.log(discounted(12,50));


const random = () => {
    return Math.floor(Math.random()*100)+1
}

console.log(random())

const CustomerAccount = {
    name: '',
    balance: 0.0,
  
    init(name, balance) {
      this.name = name;
      this.balance = balance;
    },
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount} into ${this.name}'s account. New balance: $${this.balance}`);
      } else {
        console.log('Invalid deposit amount');
      }
    },
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount} from ${this.name}'s account. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds');
      } else {
        console.log('Invalid withdrawal amount');
      }
    },
  
    getBalance() {
      return this.balance;
    }
};
// const johnDoeAccount = Object.create(CustomerAccount);
// johnDoeAccount.init('John Doe', 1000.0);
// johnDoeAccount.deposit(500.0);
// johnDoeAccount.withdraw(200.0);
// console.log(`John's current balance: $${johnDoeAccount.getBalance()}`);

