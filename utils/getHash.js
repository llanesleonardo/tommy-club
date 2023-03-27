const getHash = () => {
  let loc = location.hash.slice(1).split("/")[1] || "/";
  return loc;
};

export default getHash;
