const getStoredJobApplication = () => {
    const storedApplication = localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}

const saveApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exsits = storedJobApplications.find(jobId => jobId === id)
    if(!exsits){
        storedJobApplications.push(id);
        localStorage.setItem("job-application", JSON.stringify(storedJobApplications));
    }
}


export { getStoredJobApplication, saveApplication}