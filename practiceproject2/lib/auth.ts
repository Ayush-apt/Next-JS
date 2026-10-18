import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/model/user.model";

const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{label,type:'text'},
                password:{label, type:'password'}
            },
            async authorize(credentials, req) {
                let email = credentials?.email
                let password = credentials?.password

                if(!email || !password){
                    throw new Error("Email or password is not found")
                }

                await connectDB()
                let user = await User.findOne({email})

                if(!user){
                    throw new Error("User not found")
                }

                let isMatch = await bcrypt.compare(password,user.password)

                if(!isMatch){
                    throw new Error("Incorrect Password");
                }

            },
        })
    ],
    callbacks:{

    },
    session:{
        
    },
    pages:{

    },
    secret:"",
}

export default authOptions