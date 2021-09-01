import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    let newIndex = page - 1;
    if (newIndex < 0) {
      newIndex = data.length - 1;
    }
    return setPage(newIndex);
  };

  const nextPage = () => {
    let newIndex = page + 1;
    if (newIndex > data.length - 1) {
      newIndex = 0;
    }
    return setPage(newIndex);
  };

  return (
    <main>
      <section className="section-title">
        <h1>{loading ? "Loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </section>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>

            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
