import { ID, Query } from "appwrite";
import {
  appwriteConfig,
  account,
  databases,
  storage,
  avatars,
} from "@/lib/appwrite/config";

import { NewUser } from "@/types";

export async function createUserAccount(user: NewUser) {
  console.log("user from inside createUserAccount:", user);
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.log("ERROR:", error);
    return error;
  }
}