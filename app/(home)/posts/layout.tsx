import PostsStyle from "./posts.module.css";
import Appbar from "@/components/AppBar/AppBar";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Appbar />
      <div className={PostsStyle.main}>{children}</div>
    </>
  );
}
