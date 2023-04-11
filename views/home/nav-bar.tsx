import { Tooltip } from "flowbite-react";
import getConfig from "next/config";
import Link from "next/link";
import useSWR from "swr";

export default function NavBar() {
  //TODO make this fetcher generic
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  //TODO make a separate layer for data fetching
  const { data } = useSWR("/api/env", fetcher);
  const { publicRuntimeConfig } = getConfig();

  const toolTipContent = (
    <div>
      <p>Version: {publicRuntimeConfig.version}</p>
      <p>Last Updated: 11/04/2023</p> {/* TODO remove the hard code */}
      <p>Deployed On: Google Cloud Platform In {data?.region}</p>{" "}
      {/* TODO remove the hard code */}
    </div>
  );
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <Tooltip content={toolTipContent} placement="right">
          <Link
            href="https://github.com/DWD3/PersonalPage"
            className=" text-2xl"
          >
            &lt;/&gt;
          </Link>
        </Tooltip>

        <ul className="flex items-center">
          <li>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-5 px-2 lg:px-4 py-2 rounded-md text-white"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
