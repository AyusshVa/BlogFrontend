import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/638b2e94f02b6cb66109ed9cdffb852d.jpg" />
      <Post img="https://sm.mashable.com/t/mashable_in/photo/default/nothing-store_nyvz.1248.jpg" />
      <Post img="https://sm.mashable.com/t/mashable_in/photo/default/d762b1c3-5a22-494e-92a8-990cfd8c4d50_rj2b.1248.jpg"/>
      <Post img="https://sm.mashable.com/t/mashable_in/photo/default/b1eb57dc-edbb-4bcf-a717-98729cb2e49a_cx37.1248.jpg"/>
      <Post img="https://sm.mashable.com/t/mashable_in/photo/default/james_t5zy.1248.jpg"/>
    </div>
  );
}
