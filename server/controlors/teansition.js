
import Transition from "./../models/transition.js";
import {responder} from "./../util.js";
import User from "../models/user.js";

const postApiTransiton = async (req, res) => {
    const { amount, type, description, category,user } = req.body
    const savedata = new Transition({
        amount,
        type,
        description,
        category,
        user
    })

    try {
        const saved = await savedata.save()

        return responder({
            res,
            success:true,
            message:'Transition saved',
            data: saved
        })
    }
    catch (e) {
        return responder({
            res,
            success:false,
            message:e.message
        });
    }
}

const getApiTransition = async (req, res) => {
    const transitionFind = await Transition.find()
    try {
        return responder({
            res,
            success:true,
            message:"Successfully fetched all transactions",
            data:transitionFind
        });
    }
    catch(e) {
        return responder({
            res,
            success:false,
            message :e.message
        });
    }
}

const postApiSignup = async (req, res) => {
    const { name, mobile, email, password, gender } = req.body;

    const user = await User({
        name,
        mobile,
        email,
        password,
        gender,
    })
    const saved = await user.save();
    try {
        return res.json({
            success: true,
            data: saved,
            message: 'Signup successfully'
        });
    }
    catch (e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
}

const postApiLogin =  async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password }).select('name mobile email');

    if (user) {
        return res.json({
            success: true,
            data: user,
            message: "successfully Login"
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email & password"
        })
    }
}

const getApiTransitionById =  async (req, res) => {
    const { id } = req.params;
    const transactionsId = await Transition.findOne({ _id: id });

    res.json({
        success: true,
        data: transactionsId,
        message: "successfully show transition id"
    })
}

const getApiTransitionUserById = async (req, res) => {

    try {
        const {id} = req.params;
        const userId = await Transition.find({ user:id }).populate('user')

        // userId?.forEach((sigletransition)=>{
        //     sigletransition?.user?.password = undefined;
        // })

        res.json({
            success: true,
            data: userId,
            message: " fetched userId successfull"
        })
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
        })
    }
}

const deleteApiTransition =  async (req,res)=>{
    const {_id}= req.params
await Transition.deleteOne({_id:_id});
    try{
       return res.json({
            success:true,
            message:'Transition Delete SuccessFully'
        })
    }
    catch(e){
        return res.json({
            success:false,
            message:e.message
        })
    }
}

const updateApiTransition =  async (req,res)=>{

    const {_id} = req.params;
    const { amount, type, category, description} = req.body;

    await Transition.updateOne({_id:_id},{
        $set:{
            amount:amount,
            type:type,
            category:category, 
            description:description
        }
    });
    const updateData = await Transition.findOne({_id:_id})

    try{
        return res.json({
            success:true,
            data:updateData,
            message:'Update successfully'
        })
    }
    catch(e){
        return res.json({
            success:false, 
            message:e.message
        })
    }
}
export {postApiTransiton, getApiTransition, postApiSignup, postApiLogin, getApiTransitionById, getApiTransitionUserById, deleteApiTransition, updateApiTransition}