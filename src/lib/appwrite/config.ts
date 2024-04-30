import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string,
  url: process.env.NEXT_PUBLIC_APPWRITE_URL as string
}

console.log("Appwrite Config: ", appwriteConfig)

export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export { ID } from 'appwrite';