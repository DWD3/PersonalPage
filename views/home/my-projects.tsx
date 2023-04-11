import ProjectCard from "components/project-card";

export default function MyProjects() {
  return (
    <div className="mx-5 lg:mx-0">
      <div>
        <h3 className="text-3xl mt-20">My Projects</h3>
        <p className="text-lg p-5">These are my past and current projects.</p>
        <div className="lg:flex flex-wrap gap-10">
          <ProjectCard
            title="Athena Lite"
            description="Web App(React + Java)"
          />
          <ProjectCard title="EDGE" description="Web App(React + ExpressJs)" />
        </div>
        <div className="lg:flex flex-wrap gap-10">
          <ProjectCard
            title="Vitural Co-Presence"
            description="Desktop Application(C#/Unity 3D)"
          />
          <ProjectCard
            title="Biometric Mirror"
            description="Desktop Application(C#/UWP)"
          />
        </div>
        <div className="lg:flex flex-wrap gap-10">
          <ProjectCard
            title="Kinect For Orangutans"
            description="Desktop Application(C#/WPF)"
          />
          <ProjectCard
            title="Data Mining On Google Map Imagery"
            description="Data Analysis Project(Python)"
          />
        </div>
      </div>
    </div>
  );
}
