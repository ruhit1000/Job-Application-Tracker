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


// all counter update
totalJobCount.innerText = allJobPosts.length;
interviewJobCount.innerText = allInterviewPosts.length;
rejectedJobCount.innerText = allRejectedPosts.length;


// filter button functionality
for (const filterBtn of filterButtons) {
    filterBtn.addEventListener('click', ()=>{
        updateActiveStat(filterBtn, filterButtons);
        const buttonName = filterBtn.innerText;
        changeSection(buttonName);
    })
}
