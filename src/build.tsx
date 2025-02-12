import { Log } from "./utils";
import { renderToString } from "react-dom/server";
import fs from "fs";
import exec from "child_process";
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
} else {
  log.info("Minifying resources...");
  exec.exec(
    "bun run tailwindcss -i src/input.css -o out/static/css/tailwind.css --build --minify",
    (error, stdout, stderr) => {
      if (error) {
        log.error(error.message);
        return;
      }
      if (stderr) {
        log.error(stderr);
        return;
      }
      log.info(stdout);
    }
  );

  const transpiler = new Bun.Transpiler({
    loader: "js",
    target: "browser",
    minifyWhitespace: true,
  });

  const files = fs.readdirSync("src/static/js");
  const minify = files.filter((file) => file.endsWith(".js"));

  minify.forEach((file) => {
    const ext = file.split(".")[file.split(".").length - 1];
    const name = file.split(".")[0];
    const orFile = fs.readFileSync(`src/static/js/${file}`, {
      encoding: "utf-8",
    });
    const minFile = transpiler.transformSync(orFile);
    fs.writeFileSync(`out/static/js/${name}.${ext}`, minFile);
  });
}
fs.writeFileSync("out/index.html", `<!DOCTYPE html />${html}`);
