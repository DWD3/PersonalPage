import { IconType } from "react-icons";

type Props = {
    href : string;
    icon : IconType;
}

export default function SocialLink(props : Props){
    return (
      <>
        <a className="mx-5" href={props.href} target="_blank" rel="noreferrer">
          <props.icon />
        </a>
      </>
    );
}