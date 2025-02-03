import Switch from "@/shared/carousels/Switch";

const teamData = [
  {
    name: "Mr. Hassan Usman",
    bio: (
      <span>
        CEO of New Frontier Development Limited, and a board member of Access
        Bank Plc
      </span>
    ),
    profileurl: "https://www.linkedin.com/in/hassan-usman-fca-4925343//",
    avatar: "/assets/images/teams/team13.png",
  },
  {
    name: "Dr. Lukman Raimi",
    bio: (
      <span>
        {" "}
        Assistant Professor of Entrepreneurship, Universiti Brunei Darussalam
      </span>
    ),
    profileurl:
      "https://www.linkedin.com/in/dr-lukman-raimi-mnim-fifp-fcgep-fcent-fimc-cmc-02404b25",
    avatar: "/assets/images/teams/team14.png",
    bio_description: <span></span>,
  },
  {
    name: "Mr. Ohio Ifiabor",
    bio: (
      <span>
        Previously Executive Director/Chief Operating Officer of Globacom
        Nigeria ,{" "}
      </span>
    ),
    profileurl: "https://www.linkedin.com/in/ohio-ifiabor-2bb28810/",
    avatar: "/assets/images/teams/team15.png",
    bio_description: <span></span>,
  },
  {
    name: "Alh. Umaru Kwairanga",
    bio: (
      <span>
        CEO, Finmal Finance Services, Chairman of Gombe Investments & Property
        Development Company{" "}
      </span>
    ),
    profileurl: "https://www.linkedin.com/in/umaru-kwairanga-76809415/",
    avatar: "/assets/images/teams/team16.png",
    bio_description: <span></span>,
  },
  {
    name: "Dr. Ekenta Cornelius Micheal",
    bio: (
      <span>
        Distinguished academic and prior Assistant General Manager of the Kaduna
        Business School ,
      </span>
    ),
    profileurl: "https://www.linkedin.com/in/cornelius-ekenta-a27a6062/",
    avatar: "/assets/images/teams/team17.png",
    bio_description: <span></span>,
  },
  {
    name: "Mr. Peter Edoh",
    bio: (
      <span>
        Director, Forth-Spring Consulting, and a British Council and World Bank
        Consultant
      </span>
    ),
    profileurl: "https://www.linkedin.com/in/peter-edoh-b59745115/",
    avatar: "/assets/images/teams/team18.png",
    bio_description: <span></span>,
  },
  {
    name: "Mr. Kenneth Nwaichi",
    bio: <span>CEO, Kenbridge Consulting and distinguished Academician</span>,
    profileurl: "https://www.linkedin.com/in/kenneth-nwaichi-26323774/",
    avatar: "/assets/images/teams/team19.png",
  },
];

export default function AdvisoryBoard() {
  return (
    <Switch
      teams={teamData}
      itemsToShowDesktop={4}
      itemsToShowMobile={1}
      className="custom-class"
      className2={`hidden`}
    />
  );
}
