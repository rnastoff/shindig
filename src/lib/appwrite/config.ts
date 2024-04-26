import { Client, Account } from 'appwrite';

export const appwriteConfig = {
  projectId: process.env.APPWRITE_PROJECT_ID as string,
  url: process.env.APPWRITE_URL as string
}

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export { ID } from 'appwrite';