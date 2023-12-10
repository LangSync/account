import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Snippet,
  Tooltip,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";

export function CliCommandBox(props: { apiKey: string }) {
  let [apiKeyShowStatus, setApiKeyShowStatus] = useState(false);
  let [apiKey, setApiKey] = useState("");

  return (
    <Card className="w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="logo_black.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">LangSync CLI command</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          To authenticate your with LangSync CLI, run the following command in
          your terminal:
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="justify-center">
        <Snippet
          variant="flat"
          color="warning"
          hideSymbol={true}
          codeString={`langsync auth --apiKey=${props.apiKey}`}
        >
          langsync auth --apiKey=&lt;YOUR_API_KEY&gt;
        </Snippet>
      </CardFooter>
    </Card>
  );
}
