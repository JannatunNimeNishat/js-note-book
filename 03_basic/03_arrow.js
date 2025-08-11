// this -> refers the current context. 

const user = {
    userName:'nishat',
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.userName = 'ni7'
// user.welcomeMessage()

// console.log(this)




