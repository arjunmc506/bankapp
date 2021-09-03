class Bank{

    createaccount(){
        let person_name=name.value;
        let account_number=acno.value;
        let balance=bal.value;
        let password=pwd.value;
        let user={
            person_name,account_number,balance,password
        }
        localStorage.setItem(account_number, JSON.stringify(user))
        alert("Account Created Successfuly")
        location.href="login.html"
    }

    authenticate(){
        let account_number=acno.value;
        let password=pwd.value;
        if(account_number in localStorage){
            let user=JSON.parse(localStorage.getItem(account_number))
            if(user.password==password){
                alert("Login success");
                sessionStorage.setItem(account_number,JSON.stringify(user))
                location.href="home.html"
                
            }
            else{
                alert("invalid password");
            }
        }
        else{
            alert("Invalid Account Number")
        }
    }

    balancecheck(){
        let logeduser=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`Available Balance is ${logeduser.balance}`)
    }


    logout(){
        sessionStorage.clear();
        location.href="login.html"
    }

    fundtransfer(){
        let to_acno=toacno.value
        let amount=amt.value
        if(to_acno in localStorage){
            let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            if (user.balance>=amount){
                let user1=JSON.parse(localStorage.getItem(to_acno))
                let user2=JSON.parse(localStorage.getItem(user.account_number))
                let bal=user1.balance+Number(amount)
                user1.balance=bal
                user2.balance-=amount
                localStorage.setItem(user1.account_number,JSON.stringify(user1))
                localStorage.setItem(user2.account_number,JSON.stringify(user2))
                user.balance-=amount
                sessionStorage.setItem(user.account_number, JSON.stringify(user))
                alert("success");

            }
            else{
                alert("insufficient balance")
            }

        }
        else{
            alert("invalid account number")
        }
    }

}

var bank=new Bank()