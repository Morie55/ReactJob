import React, { useState, useEffect } from "react";
import axios from "axios";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = isHome ? "/jobs?_limit=3" : "/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(apiUrl); // Axios handles JSON parsing automatically
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [apiUrl]); // Dependency to re-fetch when `isHome` changes

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblistings;
