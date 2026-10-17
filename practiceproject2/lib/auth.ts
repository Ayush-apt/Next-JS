import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{label,type:'text'},
                password:{label, type:'password'}
            },
            authorize(credentials, req) {
                return {}
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