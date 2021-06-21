import React, { useEffect, useState } from "react";
import tailwindcss from "tailwindcss";
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
  console.log(issues);

  return (
    <div>
      github issues list
      <div>
        {issues.map((issue, index) => {
          return (
            <div className="border border-gray-500 grid grid-cols-6 grid-rows-2">
              <h2 className="col-start-2 row-start-1">status {issue.state}</h2>
              <h2 className="col-start-3 row-start-1"> {issue.title}</h2>

              <h2 className="col-start-4 row-start-2">
                created by {issue.user.login}
              </h2>
              <p className="row-start-2 col-start-3">
                last update {issue.updated_at}
              </p>
              <h2 className="row-start-1 col-start-6">
                comments ({issue.comments})
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
