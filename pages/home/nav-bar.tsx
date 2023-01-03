import { GrDocumentText } from "react-icons/gr";

export default function NavBar(){
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className=" text-2xl">&lt;/&gt;</h1>
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