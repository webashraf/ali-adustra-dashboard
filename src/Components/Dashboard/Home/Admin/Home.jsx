const Home = () => {
  return (
    <div className="">
<div className={"p-10 shadow-lg mb-16"}>
<h1 className={"text-6xl font-serif"}>Dashboard</h1>
</div>
      <div className="flex">
        <div className="">
          <div className="stats shadow-2xl">
            <div className="stat place-items-center">
              <div className="stat-title">Total Class</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Total Student</div>
              <div className="stat-value text-secondary">4,200</div>
              <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Total Class Notice</div>
              <div className="stat-value text-secondary">4,200</div>
              <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Total Public Notice</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Home;
