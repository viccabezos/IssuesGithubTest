import React, { useEffect, useState } from "react";
import { token } from "../config";
import { Octokit } from "@octokit/rest";
import { useParams } from "react-router-dom";
import Pagination from "./pagination";

export default function Github() {
  const { Octokit } = require("@octokit/rest");
  const [issues, SetIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const octokit = new Octokit({
    auth: token,
  });

  useEffect(() => {
    async function getIssues() {
      const { data } = await octokit.request(
        "GET /repos/facebook/react/issues?page=${page}",
        { owner: "facebook", repo: "react" }
      );

      SetIssues(data);
    }

    getIssues();
  }, []);
  console.log(issues);

  const { page } = useParams();

  return (
    <div className="w-full h-screen">
      <h1>facebook/ create-react </h1>
      <div>
        <Pagination nextPage={nextPage} prevPage={prevPage} />
      </div>

      <div className="mx-2 mt-5 ">
        {issues.map((issue, index) => {
          return (
            <div className="m-0.5 border-b-2 bg-gray-100 border-gray-300 // md:w-4/5 ">
              <div className="grid grid-cols-4 grid-rows-2">
                <h2 className="col-start-1 text-xs // md:text-base">
                  status {issue.state}
                </h2>
                <h2 className="col-start-2 col-span-2 text-sm // md:text-base">
                  {issue.title}
                </h2>
                <div className="row-start-2 col-start-2 col-span-2">
                  <h2 className=" text-xs // md:text-base">
                    created by {issue.user.login}
                  </h2>
                  <p className="   text-xs // md:text-base">
                    last update {issue.updated_at}
                  </p>
                </div>

                <h2 className="col-start-4 text-xs // md:text-base ">
                  comments ({issue.comments})
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
