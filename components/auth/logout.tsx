import { signOut, useSession } from "next-auth/react";

export function LogoutBtn() {
  const { data: session } = useSession();

  if (session) {
    return <a onClick={() => signOut()}>Log out</a>;
  }
}
