import { Container } from "@mui/material";
import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export function UnAuthenticatedBody() {
  return (
    <Container maxWidth="sm" className="my-10">
      <Card>
        <CardBody className="p-7">
          <Title />
          <BriefFeatures />
          <GithubAuth />
        </CardBody>
      </Card>
    </Container>
  );
}

function GithubAuth() {
  return (
    <div className="flex items-center py-4">
      <Button
        color="default"
        onClick={() => signIn("github")}
        endContent={<GitHubIcon />}
      >
        Sign in with Github
      </Button>
    </div>
  );
}

function Title() {
  return (
    <div className="flex">
      <p
        className="text-2xl font-bold text-left text-gradient"
        style={{ marginTop: "1rem" }}
      >
        Localize your apps faster <br /> than ever.
      </p>
    </div>
  );
}

function BriefFeatures() {
  let features = [
    "AI-powered Engine",
    "Accurate & Fast flow",
    "Easy to use & Integrate",
    "Useful for any kind of software",
  ];

  return (
    <CardBody>
      <ul
        className="list-disc list-inside"
        style={{
          listStyle: "none", // To remove bullet icon
          paddingLeft: "0.5rem", // for decrease padding on left
        }}
      >
        {features.map((feature) => {
          return (
            <>
              <li key={feature}>
                <CheckCircleOutlineIcon
                  style={{
                    color: "#117A2A",
                    fontSize: "12.5px",
                    marginBottom: "2.5px",
                  }}
                />{" "}
                {feature}
              </li>
            </>
          );
        })}
      </ul>
    </CardBody>
  );
}
