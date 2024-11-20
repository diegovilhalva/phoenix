import { Client,Account } from 'appwrite';


const client = new Client();

client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
.setEndpoint('https://cloud.appwrite.io/v1')

const account = new Account(client)


export {account}
