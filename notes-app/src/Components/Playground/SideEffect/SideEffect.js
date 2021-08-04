import React, { useEffect, useState, useCallback } from "react";

const SideEffect = () => {
  const [users, setUsers] = useState([]);



    let fetchUser = useCallback(async () => {
        console.log("Use Callback")
        fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(result => {
            console.log("Result - ", result);
            setUsers(result.data)
        }).catch(err => console.log(err))
    },[])
    
    useEffect(() => {
        console.log("Use Effect")
        fetchUser()
        return () => {          // Before the re-render
            console.log("Clean up!");
        }
    }, [])




    const [email, setEmail] = useState("")
    const emailIsValid = flag => {
        console.log(flag)
    }
    useEffect(() => {
        console.log("Email Changed - Effect fired")
        emailIsValid(email.includes("@"))
    }, [email])

    const emailChangeHandler = (event) =>{
        setEmail(event.target.value)
    }
//   useEffect(() => {         // runs after very first render and everytime after re-render
//     console.log("Effect");
//     let i = 0;
//     let identifier = setInterval(() => {
//       ++i;
//       console.log("Timer ", i);
//     }, 1000);
//     setUsers([{email : "john@test.com"}])
//     // Return function executes everytime when component gets unloaded
//     return () => {
//         console.log("Clean up!");
//         clearInterval(identifier);
//     };
//   }, [setUsers]);

  // fetch("https://reqres.in/api/users")
  //     .then(response => response.json())
  //     .then(result => {
  //         console.log(result);
  //         // setUsers(result.data)
  //     })
  //     .catch(err => console.log(err));

  const clickHandler = () => {
      setUsers([{email : "test@test.com"}])
    // fetchUser()
  }
  return (
    <div>
    <button onClick={clickHandler}>Update User</button>
      <input value = {email} onChange={emailChangeHandler}/>
    </div>
  );
};

export default SideEffect;
