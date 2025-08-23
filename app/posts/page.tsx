import React from "react";

const page = () => {

  const posts =  Prisma.post.findMany();

  return <div>page</div>;
};

export default page;
