import React, { useEffect, useState } from "react";

import { Octokit } from "@octokit/rest";

export default function Github() {
  const { Octokit } = require("@octokit/rest");
  const [issues, SetIssues] = useState([]);
  const octokit = new Octokit({
    auth: " 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",
  });

  useEffect(() => {
    async function getIssues() {
      const { data } = await octokit.request(
        "GET /repos/facebook/react/issues",
        { owner: "facebook", repo: "react" }
      );

      SetIssues(data);
    }

    getIssues();
  }, []);

  return <div>github issues list</div>;
}
