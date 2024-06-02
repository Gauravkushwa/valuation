
import { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  async function fetchAndUpdateData() {
    try {
      let resp = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      let res = await resp.json();

      // Ensure res contains the expected data array
      if (res && Array.isArray(res.data)) {
        setData(res.data);
        console.log(res.data);
      } else {
        console.error("Unexpected data format:", res);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }


  return (
    <>
      {data.map((post) => (
       <div style={{display: "grid",}}>
         <div key={post.ids}
          style={{margin: "10px", border: "1px solid green", padding: "10px 20px", gridTemplateColumns: "repeat(3, 1fr)"}}>
          <p>Title: {post.title}</p>
          <p>Catergory: {post.category}</p>
          <p>Price: {post.price}</p>
          {/* <Link to={`/users/${user?.id}`}>Click here for more details</Link> */}
          <button>More Detailes</button>
        </div>
       </div>
      ))}
    </>
  );
}


