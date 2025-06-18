// import express from express;
const userRoute = (req,res)=>{
    res.send("This is home page from user route");
}

const boardRoute = (req,res)=>{
    res.send("This is board page");
}

export default userRoute;
// export default boardRoute;