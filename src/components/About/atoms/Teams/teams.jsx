import Switch from "@/shared/carousels/Switch";

const teamData = [
  {
    name: "Engr. Bello  Tongo",
    bio: <span>Chief Executive Officer, </span>,
    profileurl: "https://www.linkedin.com/in/bellotongo/",
    avatar: "/assets/images/teams/team1.png",
    bio_description: (
      <span>
        {" "}
        Bello M Tongo is an award-winning executive with 14+ years in
        construction, entrepreneurship and education. He has a rich background
        in teaching and curriculum design, having worked with leading
        educational and other institutions. Holding degrees in Civil
        Engineering, Construction Management and Education, Bello is a
        recognized speaker, mentor, and member of various professional networks.
      </span>
    ),
  },
  {
    name: "Halima Ibrahim Abba",
    bio: <span> Consultant C O O | C F O</span>,
    profileurl:
      "https://www.linkedin.com/in/halima-ibrahim-abba-llb-mphil-fiidm-71727328/",
    avatar: "/assets/images/teams/team2.png",
    bio_description: (
      <span>
        {" "}
        Halima Ibrahim Abba is a distinguished professional with 14 years of
        experience across public, private, and non-profit sectors, notably in
        infrastructure finance and international development, and is the founder
        of the pan-African Skills Outside School Foundation. She has played
        pivotal roles in major projects like the Infrastructure Corporation of
        Nigeria, holds degrees from Kings College London and Cambridge
        University, serves on boards and is actively involved in various
        international associations and mentoring initiatives.
      </span>
    ),
  },
  {
    name: "Promise Abolarin",
    bio: <span>Assistant Manager, </span>,
    profileurl:
      "https://www.linkedin.com/in/abolarin-promise/?originalSubdomain=ng",
    avatar: "/assets/images/teams/team5.png",
    bio_description: (
      <span>
        Promise Abolarin is an experienced Data analyst with 5+ years of
        experience, specializing in Data Analysis, Data Science, Education, and
        Monitoring and Evaluation (M&E). Promise Abolarin possesses skills in
        classroom management and student operations, with years of experience as
        an educator in the K12 education.
      </span>
    ),
  },
  {
    name: "Nasir Babayo",
    bio: "Assistant Manager",
    profileurl: "https://www.linkedin.com/in/nasir-babayo-a82136b4",
    avatar: "/assets/images/teams/nasir.jpg",
    bio_description: (
      <span>
        Nasir Babayo is a seasoned educator and business administrator with 14+
        years of experience. Skilled in leadership, business development, and
        digital marketing, he leverages AI for teaching and strategic planning.
        Fluent in multiple languages, he excels in communication, ICT, and
        content creation, driving innovation in education and business.
      </span>
    ),
  },
  {
    name: "Adebayo Adeniyi",
    bio: <span>Senior I.T Officer, </span>,
    profileurl: "https://www.linkedin.com/in/adeniyi-adebayo-bab5a2144/",
    avatar: "/assets/images/teams/team4.png",
    bio_description: (
      <span>
        Adeniyi Adebayo has 10+ years expertise in website development, IT,
        database management, network administration & management, cloud
        solutions and e-learning platform development. He has a Bachelor of
        Science degree in Computer Science and a National Diploma in Library and
        Information Science.
      </span>
    ),
  },
  {
    name: "Fatimo Adebanjo",
    bio: <span>Data, Science & Analytics Associate Officer,</span>,
    profileurl: "https://www.linkedin.com/in/fatimo-adebanjo/",
    avatar: "/assets/images/teams/team21.png",
    bio_description: (
      <span>
        Fatimo Adebanjo is a data scientist, skilled in Python, TABLEAU, Power
        BI, amongst other tools and a researcher. She has several certifications
        in data science from reputable institutions such as Data Camp, Aspilos
        Foundation, Festman Learning Hub, Skill Up Academy, Nigeria Digital,
        Future Academy African, Coursera, and Udacity.
      </span>
    ),
  },
  {
    name: "Emmanuel Abuo",
    bio: <span>IT Graduate Officer, </span>,
    profileurl: "https://www.linkedin.com/in/emmanuel-abuo-b41453206/",
    avatar: "/assets/images/teams/emmanuel-abuo.jpg",
    bio_description: (
      <span>
        Emmanuel Abuo is an IT professional with a wide-ranging expertise in
        areas including frontend web development (React js, Next Js & Remix),
        back-end integration, technical support engineering (M365),Cloud
        Administration, sysops, product research, systems & network
        administration.He holds a Bachelor of Science in Computer Science from
        the University of Cross River (UNICROSS).
      </span>
    ),
  },
  {
    name: "Afolabi Omotoyosi",
    bio: <span>Data & Research Officer, </span>,
    profileurl: "#",
    avatar: "/assets/images/teams/afolabi.jpg",
    bio_description: (
      <span>
        Afolabi Omotoyosi is a first-class LASU graduate, passionate about
        growth, problem-solving, and data analysis. A recipient of multiple
        scholarships, including Stanbic IBTC and Axia Africa, Afolabi is
        building expertise in data, research, and economics. With strong
        analytical skills and a drive for continuous learning, she aims to
        become a certified Data Analyst and Chartered Business Administrator. An
        avid reader and traveler, Afolabi brings a well-rounded, strategic
        mindset to finance and data-driven decision-making.
      </span>
    ),
  },
];

export default function Teams1() {
  return (
    <Switch
      teams={teamData}
      itemsToShowDesktop={4}
      itemsToShowMobile={1}
      className="custom-class"
    />
  );
}
