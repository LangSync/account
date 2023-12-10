import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

export function AuthBtn() {
  const { data: session } = useSession();

  if (!session) {
    return <Button>Contact</Button>;
  }
}
