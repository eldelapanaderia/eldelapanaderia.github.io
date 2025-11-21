// Put your computations here.

function userComputed(data) {
  const currentComputed = data.userComputed || {};
  currentComputed.frontmatterRaw = data; 
  return currentComputed;
}

exports.userComputed = userComputed;
