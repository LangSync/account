import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  if(req.method === "POST") {

    let session = await getServerSession(req, res, authOptions)
    let email = session?.user?.email;
    let userInfo = await getUserInfo(email);
    
    res.status(200).send(userInfo);
  } else {
    res.status(404).send("Not Found");
  }
} 

async function getUserInfo(email: string | undefined | null) {
  let userInfo = await fetch(process.env.LANGSYNC_API_URI + "/user-info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  return userInfo.json();
}