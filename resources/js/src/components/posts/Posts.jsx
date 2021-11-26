import Post from "../post/Post";
import "./posts.css";
import ap1 from "../../images/apartment1.jpg"
import ap2 from "../../images/apartment2.jpeg"
import ap3 from "../../images/apartment3.jpg"
import ap4 from "../../images/apartment4.jpg"

export default function Posts() {
  return (
    <div className="posts">
      <Post img={ap1} />
      <Post img={ap2} />
      <Post img={ap3}/>
      <Post img={ap4}/>
    </div>
  );
}
