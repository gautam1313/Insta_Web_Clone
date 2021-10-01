import { useEffect } from "react";

const notfound = () => {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found</p>
      </div>
    </div>
  );
};

export default notfound;
