import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ApiKeyBox } from "./components/api_key_box";
import { UserInfo } from "@/types";
import { CliCommandBox } from "./components/cli_command";

export function AuthenticatedBody() {
  let { data: session, status } = useSession();

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");

    async function fetchData() {
      try {
        const response = await fetch("/api/user", {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data?.user);
        } else {
          setError("Something went wrong..");
        }
      } catch (error) {
        setError("Something went wrong..");

        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  let apiKey = userInfo?.apiKeys[0].apiKey ?? "";

  return !error ? (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="h-10" />
        <ApiKeyBox apiKey={apiKey} />
        <div className="h-10" />
        <CliCommandBox apiKey={apiKey} />
        <div className="h-10" />
      </div>
    </>
  ) : (
    <p>{error}</p>
  );
}
