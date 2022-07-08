// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.

import * as $0 from "./index.tsx";
import * as $1 from "./docs.tsx";
import * as $2 from "./_docs.tsx";
import * as $3 from "./_docs/$path+.tsx";
import * as $4 from "./docs/$path+.tsx";

export default {
  "/": $0,
  "/docs": $1,
  "/_docs": $2,
  "/_docs/:path+": $3,
  "/docs/:path+": $4,
};
