// all selectors
const allJobsContainer = document.getElementById('all-jobs-container');
const allInterviewContainer = document.getElementById('interview-container');
const allRejectedContainer = document.getElementById('rejected-container');
const totalJobCount = document.getElementById('total-job-count');
const interviewJobCount = document.getElementById('interview-job-count');
const rejectedJobCount = document.getElementById('rejected-job-count');
const filterButtons = document.getElementsByClassName('filter-btn');
const filterJobCounter = document.getElementById('filter-jobs-counter');
const filterJobText = document.getElementById('filter-job-text');
const noInterviewCard = document.getElementById('no-interview-card');
const noRejectedCard = document.getElementById('no-rejected-card');
const mainContainer = document.getElementById('main-container');


// all counter update
countTotal();

// filter button functionality
for (const filterBtn of filterButtons) {
    filterBtn.addEventListener('click', () => {
        updateActiveStat(filterBtn, filterButtons);
        const buttonName = filterBtn.innerText;
        changeSection(buttonName);
    })
}


// function for zero interview and zero rejected
if (allInterviewPosts.length == 0) {
    noInterviewCard.classList.remove('hidden');
} else {
    noInterviewCard.classList.add('hidden');
}
if (allRejectedPosts.length == 0) {
    noRejectedCard.classList.remove('hidden');
} else {
    noRejectedCard.classList.add('hidden');
};


// all job posts rendering
for (const jobPost of allJobPosts) {
    const jobPostCard = document.createElement('div');
    jobPostCard.classList = 'job-card flex justify-between bg-white p-6 rounded-lg border border-base-300';
    jobPostCard.innerHTML = `
    <div>
        <h2 class="text-[#002c5c] font-semibold text-lg">${jobPost.company_name}</h2>
        <p class="job-position text-gray-500">${jobPost.position}</p>
        <p class="my-5 text-gray-500">${jobPost.work_location} | ${jobPost.job_type} | ${jobPost.salary_range}</p>
        <div class="badge badge-neutral badge-outline p-3 mb-2">NOT APPLIED</div>
        <P class="text-[#323B49] mb-5">${jobPost.discipline}</P>
        <button class="btn btn-outline btn-success">INTERVIEW</button>
        <button class="btn btn-outline btn-error ml-2">REJECTED</button>
    </div>
    <button class="btn rounded-full">
        <i class="fa-regular fa-trash-can"></i>
    </button>
    `
    allJobsContainer.append(jobPostCard);
};


// Interview and Rejected button functionality
mainContainer.addEventListener('click', (event)=>{
    const buttonElement = event.target;
    const buttonName = buttonElement.innerText;
    if (buttonName === 'INTERVIEW'){
        addJobCardToInterview(buttonElement);
        updateCardStatus(buttonElement);
        countTotal();
    }
})