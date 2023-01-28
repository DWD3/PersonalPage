type Props = {
  link: string;
  text: string;
};

export default function ClickableLink(props: Props) {
  return (
    <a
      target="_blank"
      className="text-blue-700"
      rel="noreferrer"
      href={props.link}
    >
      {props.text}
    </a>
  );
}
