import { signIn } from "next-auth/react";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

export function UnAuthenticatedBody() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Get your API key and start using <br />
          <span
            style={{
              color: "#0077b6",
            }}
          >
            LangSync
          </span>{" "}
          in seconds.
        </h1>

        <div
          className="
            flex flex-col
            items-center
            justify-center
            flex-1
            px-20
            text-center
            mt-10
            space-y-4
            sm:px-6 sm:flex sm:items-center sm:justify-center
            md:flex md:items-center md:justify-center
            lg:flex lg:items-center lg:justify-center
            xl:flex xl:items-center xl:justify-center
            2xl:flex 2xl:items-center 2xl:justify-center
        "
        >
          <GithubLoginButton onClick={() => signIn("github")} />
          {/* <GoogleLoginButton onClick={() => signIn("github")} /> */}
        </div>
      </main>
    </div>
  );
}
