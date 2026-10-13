let mongodbUrl = process.env.MONGODB_URI
if(!mongodbUrl){
    throw new Error("mongodb url not found.")
}