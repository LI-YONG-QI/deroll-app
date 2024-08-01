import { createApp } from "@deroll/app";
import { hexToString } from "viem";

// create application
const app = createApp({ url: "http://127.0.0.1:5004" });

// log incoming advance request
app.addAdvanceHandler(async (data) => {
  const payload = hexToString(data.payload);
  console.log(payload);
  return "accept";
});

// log incoming inspect request
app.addInspectHandler(async (data) => {
  console.log(data);
});

// start app
app.start().catch((e) => process.exit(1));
