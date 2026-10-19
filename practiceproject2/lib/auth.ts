import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";

const authOptions:NextAuthOptions={
    providers:[

        GoogleProvider({

        }),

        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{label:"Email",type:'text'},
                password:{label:"Password", type:'password'}
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

                return{
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
            },
        })
    ],
    callbacks:{
        async jwt({token, user}) {
            if(user){
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.image = user.image
            }
            return token
        },

        session({session, token}){
            if(session.user){
                session.user.id = token.id as string
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.image as string
            }
            return session
        }
    },
    session:{
        strategy: 'jwt',
        maxAge: 30*24*60*60
    },
    pages:{
        signIn: '/login',
        error: '/login'
    },
    secret:process.env.NEXT_AUTH_SECRET,
}

export default authOptions

function GoogleProvider(arg0: {}): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
}
