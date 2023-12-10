import { AuthenticatedBody } from "@/components/authenticated/authenticated_body";
import { NavBar } from "@/components/navbar/navbar";
import { UnAuthenticatedBody } from "@/components/unauthenticated/unauthenticated_body";
import { useSession } from "next-auth/react";

export default function Home() {
  let { data: session, status } = useSession();

  return (
    <>
      <NavBar />
      {session && status === "authenticated" ? (
        <AuthenticatedBody />
      ) : (
        <UnAuthenticatedBody />
      )}
    </>
  );
}
