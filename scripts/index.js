import fs from "fs";
import path from "path";
import pkg from "../package.json" assert { type: "json" };

const targetPath = path.join(process.cwd(), ".npmrc");

let content = "\n";
for (const dep of Object.keys(pkg.dependencies)) {
  content += `public-hoist-pattern[]=${dep}\n`;
}

fs.appendFileSync(targetPath, content, {
  encoding: "utf8",
  mode: 0o644,
  flag: "a",
});
