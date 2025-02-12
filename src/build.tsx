import { Log } from "./utils";
import { renderToString } from "react-dom/server";
import fs from "fs";
import Base from "./templates/Base";
import Title from "./templates/Title";
import Bento from "./templates/Bento";
import NotBento from "./templates/NotBento";

const environment: "prod" | "dev" =
  (process.env.ENVIRONMENT as "prod" | "dev") || "prod";
const log = new Log();

if (environment == "dev") {
  log.warn("Running in a dev mode!");
}

if (!fs.existsSync("out")) fs.mkdirSync("out");

const html = renderToString(
  <Base isDev={environment == "dev"}>
    <Title />
    <Bento />
    <NotBento />
  </Base>
);
fs.cpSync("src/static", "out/static", { recursive: true });
if (environment == "dev") {
  fs.cpSync("src/static_dev", "out/static/js", { recursive: true });
}
fs.writeFileSync("out/index.html", `<!DOCTYPE html />${html}`);
