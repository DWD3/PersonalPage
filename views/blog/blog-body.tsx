import BlogCard from "components/blog-card";

export default function BlogBody() {
  return (
    <div className="lg:flex flex-wrap gap-10">
      <BlogCard title="Blog 1" description="test" />
      <BlogCard title="Blog 2" description="test" />
      <BlogCard title="Blog 3" description="test" />
    </div>
  );
}
