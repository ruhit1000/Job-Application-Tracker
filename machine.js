// count total function
function countTotal() {
    totalJobCount.innerText = allJobPosts.length;
    interviewJobCount.innerText = allInterviewPosts.length;
    rejectedJobCount.innerText = allRejectedPosts.length;
}

// filter button active status change
function updateActiveStat(currentBtn, allBtns) {
    for (const btn of allBtns) {
        btn.classList.remove('btn-active');
    }
    currentBtn.classList.add('btn-active');
};

// section change based on filter button
function changeSection(buttonName) {
    if (buttonName === 'All') {
        allInterviewContainer.classList.add('hidden');
        allRejectedContainer.classList.add('hidden');
        allJobsContainer.classList.remove('hidden');
        filterJobText.classList.add('hidden');
    }
    if (buttonName === 'Interview') {
        allJobsContainer.classList.add('hidden');
        allRejectedContainer.classList.add('hidden');
        allInterviewContainer.classList.remove('hidden');
        filterJobText.classList.remove('hidden');
        filterJobCounter.innerText = allInterviewPosts.length;
    }
    if (buttonName === 'Rejected') {
        allJobsContainer.classList.add('hidden');
        allInterviewContainer.classList.add('hidden');
        allRejectedContainer.classList.remove('hidden');
        filterJobText.classList.remove('hidden');
        filterJobCounter.innerText = allRejectedPosts.length;
    }
}

// add jobCard to interview array
function addJobCardToInterview(buttonElement) {
    const cardElement = buttonElement.parentElement;
    const companyName = cardElement.querySelector('h2').innerText;
    const positionName = cardElement.querySelector('.job-position').innerText;
    let matchedJobPost = null;
    for (const jobPost of allJobPosts) {
        if (jobPost.company_name === companyName && jobPost.position === positionName) {
            matchedJobPost = jobPost;
        }
    };
    if (!allInterviewPosts.includes(matchedJobPost)) {
        allInterviewPosts.push(matchedJobPost);
    }
    allRejectedPosts.filter((object) => {
        return object !== matchedJobPost;
    })
};

// update card status
function updateCardStatus(buttonElement){
    const cardElement = buttonElement.parentElement;
    const badge = cardElement.querySelector('.badge')
    badge.innerText = buttonElement.innerText;
    badge.classList.remove('badge-neutral', 'badge-outline');
    badge.classList.add('badge-success');
}