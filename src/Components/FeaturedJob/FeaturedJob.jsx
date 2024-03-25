import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-10">
        <img src={logo} alt="Company logo" />
      </figure>
      <div className="card-body">
        <h2 className="font-extrabold, text-2xl">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]  text-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>

          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
            {job_type}
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <CiDollar />
            <p>{salary}</p>
          </div>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FeaturedJob.propTypes = {
    job: PropTypes.object
}
export default FeaturedJob;
