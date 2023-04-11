import NavBar from "./nav-bar";
import MainIntro from "./main-intro";
import MySkills from "./my-skills";
import MyProjects from "./my-projects";
import AboutWebsite from "./about-website";
import Footer from "./footer";

export function Home() {
  return (
    <>
      <main className="bg-white px-2 lg:px-16 pb-10 min-h-screen font-mono">
        <NavBar />
        <MainIntro />
        <MySkills />
        <MyProjects />
        <AboutWebsite />
        <Footer />
      </main>
    </>
  );
}
