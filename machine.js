// count total function
function countTotal() {
    totalJobCount.innerText = allJobPosts.length;
    interviewJobCount.innerText = allInterviewPosts.length;
    rejectedJobCount.innerText = allRejectedPosts.length;
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
    const matchedJobPost = getJobDetailsObject(buttonElement)
    if (!allInterviewPosts.includes(matchedJobPost)) {
        allInterviewPosts.push(matchedJobPost);
    }
    allRejectedPosts = allRejectedPosts.filter((object)=>{
        return !(object.company_name === matchedJobPost.company_name && object.position === matchedJobPost.position);
    })
};

// add jobCard to rejected array
function addJobCardToRejected(buttonElement) {
    const matchedJobPost = getJobDetailsObject(buttonElement);
    if (!allRejectedPosts.includes(matchedJobPost)) {
        allRejectedPosts.push(matchedJobPost);
    }
    allInterviewPosts = allInterviewPosts.filter((object)=>{
        return !(object.company_name === matchedJobPost.company_name && object.position === matchedJobPost.position);
    })
};

// find out the object from all jobs array
function getJobDetailsObject(targetButton) {
    const cardElement = targetButton.parentElement;
    const companyName = cardElement.querySelector('h2').innerText;
    const positionName = cardElement.querySelector('.job-position').innerText;
    let matchedJobPost = null;
    for (const jobPost of allJobPosts) {
        if (jobPost.company_name === companyName && jobPost.position === positionName) {
            matchedJobPost = jobPost;
        }
    };
    return matchedJobPost;
}

// update card status
function updateCardStatus(buttonElement) {
    const cardElement = buttonElement.parentElement;
    const badge = cardElement.querySelector('.badge')
    badge.innerText = buttonElement.innerText;
    badge.classList.remove('badge-neutral', 'badge-outline', 'badge-success', 'badge-error');
    if (buttonElement.innerText === 'INTERVIEW') {
        badge.classList.add('badge-success');
    } else {
        badge.classList.add('badge-error');
    };
};

// render job post cards
function renderJobCards(jobCardsArray, jobCardsContainer) {
    for (const jobPost of jobCardsArray) {
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
        jobCardsContainer.append(jobPostCard);
    };
};