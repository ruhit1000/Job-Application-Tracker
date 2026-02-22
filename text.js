let array = [
    {
        "company_name": "Pixel Perfect",
        "position": "UX/UI Designer",
        "job_type": "Full-time",
        "work_location": "Remote",
        "salary_range": "$90,000 - $130,000",
        "discipline": "Crafting intuitive user interfaces and seamless digital journeys for global e-commerce brands and mobile applications."
    },
    {
        "company_name": "CloudScale Systems",
        "position": "Backend Engineer",
        "job_type": "Full-time",
        "work_location": "On-site",
        "salary_range": "$110,000 - $160,000",
        "discipline": "Architecting scalable server-side infrastructure and managing distributed databases for high-traffic enterprise SaaS platforms."
    },
    {
        "company_name": "Nova Marketing",
        "position": "Growth Lead",
        "job_type": "Part-time",
        "work_location": "Remote",
        "salary_range": "$40,000 - $60,000",
        "discipline": "Driving user acquisition through data-driven campaigns, A/B testing, and innovative digital marketing strategies."
    }
];

const target = {
        "company_name": "Nova Marketing",
        "position": "Marketing Manager",
        "job_type": "Part-time",
        "work_location": "Remote",
        "salary_range": "$40,000 - $60,000",
        "discipline": "Driving user acquisition through data-driven campaigns, A/B testing, and innovative digital marketing strategies."
    }

array = array.filter((object) => {
    return !(object.company_name === target.company_name && object.position === target.position);
});
console.log(array);