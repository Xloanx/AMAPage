

const experience = [
    {
        id: "1",
        date: {start: "MAY 2016", to: "PRESENT"},
        type: "FREELANCE",
        role:"Fullstack Web Developer",
        company: {name:"Kernel Greens Integrated Services", url: "https://www.kernelgreens.com"},
        tools: ["NEXT.JS", "REACT", "NODE.JS", "REACT NATIVE", "MongoDB", "MySQL", "BOOTSTRAP"],
        job_desription: [

                        "Built an enterprise Issue Tracking system (Mobile & Web) that drives service"+
                        "delivery and customer satisfaction using Next.js, Context API, MySQL, Prisma-IO"+
                        "and Tailwind-CSS dependent libraries.",

                        "Created a simple weather reporting Web and Mobile App using OpenWeatherMap API",

                        "Built a Marketplace App for Web and Mobile Users using Next.js, Context API "+
                        "for state management and Firebase Backend",
                        
                        "Developed an educational testing platform that allows random educational providers"+
                        "to deliver tests and evaluate their students' knowledge. The App is designed using technologies"+
                        "such as React.JS, React Native, Redux Toolkit, MongoDB and Taiwind CSS.",

        ]
    },
    {
        id: "2",
        date: {start: "MAY 2014", to: "PRESENT       "},
        type: "FULL TIME",
        role:"Training & Development Specialist",
        company: {name:"Industrial Training Fund, Nigeria", url: "https://www.itf.gov.ng"},
        tools: ["Microsoft Office Suite", "SEA Wheel", "Skills Matrix", "FIGMA", "Training Needs Assessment Tools"],
        job_desription: [
                        "Conducted Training Needs Analyses and analyzing assessment data for organizations, identifying "+ 
                        "knowledge and skill gaps, leading to the development of customized models resulting "+ 
                        "in a 90% improvement in the accuracy of training needs "+ 
                        "identification for client organizations.",

                        "Designed instructional materials and content in accordance with "+
                        "learning objectives, employing the ADDIE instructional design model.",
                        
                        "Skilled in ensuring adequate resource allocation and optimizing processes and productivity for "+
						"training projects from analysis to evaluation, with a focus on driving ROI enhancements through "+
						"data-driven strategies.",
						
						"Collaborated on developing the organization's Enterprise Resource Planning system, enhancing "+
						"efficiency, productivity, collaboration, and regulatory compliance, with a strong emphasis on "+
						"exceeding customer service delivery expectations."
        ]
    },

    {
        id: "3",
        date: {start: "2019", to: "2022"},
        type: "NON-STAFF POSITION",
        role:" Business Skills & Reintegration Trainer/Consultant ",
        company: {name:"(EU-IOM Joint initiative For The Reintegration of Returned "+
            "Migrants To Nigeria), Lagos, Nigeria", url: "https://www.iom.int"},
        tools: ["Microsoft Office Suite"],
        job_desription: [
                        "Trained over 1000 retumed migrants on business skills, value chains, and "+
                        "cooperatives.",

                        "Served as Rapporteur at the Case Management Committee Meetings of "+
                        "IOM with Civil Society Organizations, Government Agencies and other "+
                        "stakeholders.",
                        
                        "Collaborated with the International Organization for Migration on gender-"+
                        "responsive trainings and administered them accordingly."
        ]
    },

]

export const getExperience = () =>{
    return  experience;
}