const Auth= async()=>{

    const user = JSON.parse(localStorage.getItem('user' || null));
    if(!user){
        alert('please login ');
        window.location.href = '/login'
    }
return(
    <>  
    </>
)
}
export default Auth