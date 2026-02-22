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
const interviewCardsContainer = document.getElementById('interview-cards-container');
const rejectedCardsContainer = document.getElementById('rejected-cards-container');


// all counter update
countTotal();

// filter button functionality
for (const filterBtn of filterButtons) {
    filterBtn.addEventListener('click', () => {
        updateActiveStat(filterBtn, filterButtons);
        const buttonName = filterBtn.innerText;
        changeSection(buttonName);
    });
};

// all job posts rendering
renderJobCards(allJobPosts, allJobsContainer);

// Interview and Rejected button functionality
mainContainer.addEventListener('click', (event)=>{
    const buttonElement = event.target;
    const buttonName = buttonElement.innerText;
    if (buttonName === 'INTERVIEW'){
        addJobCardToInterview(buttonElement);
        updateCardStatus(buttonElement);
        renderJobCards(allInterviewPosts, interviewCardsContainer)
        renderJobCards(allRejectedPosts, rejectedCardsContainer)
        countTotal();
    }
    if (buttonName === 'REJECTED') {
        addJobCardToRejected(buttonElement);
        updateCardStatus(buttonElement);
        renderJobCards(allInterviewPosts, interviewCardsContainer)
        renderJobCards(allRejectedPosts, rejectedCardsContainer)
        countTotal();
    };
})