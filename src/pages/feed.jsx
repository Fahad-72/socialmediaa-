import Navbar from "../components/navbar/navbar";

export default function Feed() {
  return (
    <div className="feed">
      <Navbar />
      <div className="feed-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Friends</h3>
          <ul>
            <li>John Doe</li>
            <li>Sarah Khan</li>
            <li>Ali Raza</li>
          </ul>
        </aside>

        {/* Main Posts */}
        <main className="posts">
          <div className="create-post">
            <input type="text" placeholder="What's on your mind?" />
            <button>Post</button>
          </div>

          <div className="post">
            <h4>John Doe</h4>
            <p>Just joined this amazing app 🚀</p>
          </div>

          <div className="post">
            <h4>Sarah Khan</h4>
            <p>Having a great day 🌸</p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <h3>Notifications</h3>
          <ul>
            <li>Ali liked your post</li>
            <li>Sarah sent you a message</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
