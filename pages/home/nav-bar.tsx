import { GrDocumentText } from "react-icons/gr";
import ReactDOMServer from 'react-dom/server'

export default function NavBar(){


  const tooltip = ReactDOMServer.renderToString(<div>
    <h1>Hello</h1>
  </div>)

  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className=" text-2xl" data-bs-toggle="tooltip" data-bs-html="true" title="test tooltip">&lt;/&gt;</h1>
        <ul className="flex items-center">
          <li>
            <GrDocumentText className=""></GrDocumentText>
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-5 px-2 lg:px-4 py-2 rounded-md text-white"
            >
              Resume(TODO)
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}