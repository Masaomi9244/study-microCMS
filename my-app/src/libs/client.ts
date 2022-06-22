import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "my-app", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "a25e50657d2d45d5859e3378741b74f04916",
});
