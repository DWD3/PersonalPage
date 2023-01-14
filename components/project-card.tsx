type Props = {
  title: string;
  description: string;
};

export default function ProjectCard(props: Props) {
  return (
    <>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
        <div className="flex justify-center"></div>
        <h1 className="text-xl py-2 font-semibold">{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}
