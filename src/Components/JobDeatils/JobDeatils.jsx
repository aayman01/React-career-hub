import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveApplication } from "../../Utility/LocalStorage";

const JobDeatils = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    const {
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
    //   salary,
    //   job_title,
    //   phone,
    //   email,
    //   address
    } = job;
    // console.log(job)
    // console.log(jobs, id)
    const handleApplyJob = () => {
        saveApplication(idInt);
        toast('You have applied successfully')
    }
    return (
      <div>
        <h2>Job deatils of: {id}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="border md:col-span-3">
            <p>
              <span>Job Description: {job_description} </span>
            </p>
            <p>
              <span>Job Responsibility:{job_responsibility} </span>
            </p>
            <p>
              <span>Educational Requirements:{educational_requirements} </span>
            </p>
            <p>
              <span>Experiences:{experiences} </span>
            </p>
          </div>
          <div className="border md:col-span-1">
            <h2 className="text-2xl">Side thing</h2>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    );
};

export default JobDeatils;