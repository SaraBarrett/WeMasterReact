import LoginBtn from "./LoginBtn";

export default function LoginUser(){
    function addUserName(myLoginName){
      const user = {
        name: myLoginName,
        job:'',
        age:''
      };

      console.log(user);

    }


    return(  
    <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Name</label>
          {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
          <input type="text" />
        </p>
  
        <p id="actions">
          <LoginBtn eventHandler={()=> addUserName('Sara') }>Add User</LoginBtn>
        </p>
      </div>
      );
}