export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Link Shortener</h1>
      <form action="/api/create" method="POST">
        <input type="url" name="url" placeholder="Enter URL" required style={{ padding: "10px", width: "300px" }} />
        <button type="submit" style={{ padding: "10px" }}>Shorten</button>
      </form>
    </div>
  );
}