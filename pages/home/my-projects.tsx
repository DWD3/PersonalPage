import ProjectCard from "../../components/project-card";

export default function MyProjects(){
    return (
      <div className="mx-5 lg:mx-0">
        <div>
          <h3 className="text-3xl mt-20">My Projects</h3>
          <p className="text-lg p-5">These are my past and current projects.</p>
          <div className="lg:flex flex-wrap gap-10">
            <ProjectCard title="Athena Lite" description="TODO description" />
            <ProjectCard title="EDGE" description="TODO description" />
          </div>
          <div className="lg:flex flex-wrap gap-10">
            <ProjectCard title="Vitural Co-Presence" description="TODO description" />
            <ProjectCard title="Biometric Mirror" description="TODO description" />
          </div>
          <div className="lg:flex flex-wrap gap-10">
            <ProjectCard title="Kinect For Oranguatans" description="TODO description" />
            <ProjectCard title="Data Mining On Google Map Imagery" description="TODO description" />
          </div>
        </div>
      </div>
    );
}