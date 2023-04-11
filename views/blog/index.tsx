import BlogBody from "./blog-body";
import BlogHeader from "./blog-header";

export default function Blog() {
  return (
    <>
      <main className="bg-white px-2 lg:px-16 pb-10 min-h-screen font-mono">
        <div className=" text-center">
          <BlogHeader></BlogHeader>
          <BlogBody></BlogBody>
        </div>
      </main>
    </>
  );
}
