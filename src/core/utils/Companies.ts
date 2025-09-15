import google from "@assets/companies/google.png";
import uber from "@assets/companies/uber.png";
import linkedin from "@assets/companies/linkedin.png";
import facebook from "@assets/companies/facebook.png";
import yahoo from "@assets/companies/yahoo.png";

export type Companies = {
    id: number;
    name: string;
    image: string;
};

export const getCompanies: Companies[] = [
    {
        id: 1,
        name: "Google",
        image: google,
    },
    {
        id: 2,
        name: "Uber",
        image: uber,
    },
    {
        id: 3,
        name: "Linkedin",
        image: linkedin,
    },
    {
        id: 4,
        name: "Facebook",
        image: facebook,
    },
    {
        id: 5,
        name: "Yahoo",
        image: yahoo,
    },
];
