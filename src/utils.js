const paginate = (follower) => {
  const itemPerPage = 9;
  const pages = Math.ceil(follower.length / itemPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    // console.log(start);
    return follower.slice(start, start + itemPerPage);
  });
  return newFollowers;
};

export default paginate;
