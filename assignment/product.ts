//Task4: Create a TypeScript interface for a Product with the following properties:
//name: string
//price: number

interface Product { //create the product interface 
    name: string;
    price: number;
}

//Write a function that:
//Accepts an array of Product objects.
//Returns the total price of all products.

//create a function that accept a obj (product) and clac the total price of all prosucts 
function calcTotslPrice(products: Product[]): number{ 

    const price = products.reduce( (acc,product) => acc +product.price,0); // calculate the total price using reduce method and store the value in (price)
   
    return price; //return the result 
}




//Task5: Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.    

//create function that chek the validation of the email address, that accept a string(email) and return boolean value
function validEmail(email: string): boolean{
    //check if the string(email) match the simple regex emailPattern in order to vertify basic email validiation  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);// I used test function to check if a string matches a regular expression if the email valid it will return true otherwise false 
}



//notes to how setup TypeScript and compile it to JavaScript:

//fisrt initialize the project using (npm init -y) then install Typescript using (npm install -g typeescript)
//compile the TypeScript code into JavaScript : Run (tsc product.ts) to compile the Typescript to JavaScript
// Run JavaScript code: now JavaSript file will be generated (product.js), execute the file using (node product.js) 