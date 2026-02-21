// filter button active status change
function updateActiveStat(currentBtn, allBtns) {
    for (const btn of allBtns){
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
    if (buttonName === 'Interview'){
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