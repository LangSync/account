import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Snippet,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { EnableIcon } from "./eye_icon";

export function ApiKeyBox(props: { apiKey: string }) {
  let [apiKeyShowStatus, setApiKeyShowStatus] = useState(false);

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
          <p className="text-md">API key</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          This is your API key, you can use it for any LangSync API requests.
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="justify-center">
        <Snippet
          variant="flat"
          color="warning"
          hideSymbol={true}
          codeString={props.apiKey}
        >
          {props.apiKey === ""
            ? "No API key found"
            : `${
                apiKeyShowStatus
                  ? props.apiKey
                  : props.apiKey.replace(/./g, "*")
              }`}
        </Snippet>

        <div className="w-2" />
        <Tooltip placement="right" content={apiKeyShowStatus ? "Hide" : "Show"}>
          <Button
            onClick={() => setApiKeyShowStatus(!apiKeyShowStatus)}
            isIconOnly
            color="primary"
            aria-label="eye"
          >
            <EnableIcon status={apiKeyShowStatus} />
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
