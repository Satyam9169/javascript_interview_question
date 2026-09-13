// try {
//     let json = '{ "name":"satyam agrahari", "age": 30}';
//     let user = JSON.parse(json);
//     if(!user.name){
//         throw new Error("incomplete data No name"); // of some of the condition is not matching then i can show the error like this
//     }
// } catch (error) {
//          console.log(error.name); // it will show you what kind of error(reference error, syntax error or type error)
//     console.log(error.message); // it is show the message about the if any error related
//       console.log(error.stack); // it will show you the proper error with line no
//    console.log(error); // this is also act like stack
// }finally{
//     console.log('finally'); // either you have error or not it must show you the error
// }

// try {
//     const res = prompt(`Are you a Robot`)
//     if (res === 'Y') {
        // throw{
        //     name:'SATYAM'
        // }
        // throw new Error('Robot Found')
//     }else{
//         throw Error('Not found')
//     }
// } catch (error) {
//     console.log(error);
// }
