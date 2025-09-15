import { Companies, getCompanies } from "./Companies";
import { getJobsType, JobsType } from "./JobsType";

export type Jobs = {
    id: string;
    timestamp: string;
    title: string;
    rate: string;
    location: string;
    av: JobsType;
    company: Companies;
};

export const getJobs: Jobs[] = [
    {
        id: "a0fbc868-38be-4bae-93d0-80dcb402643f",
        timestamp: "2025-09-14 23:13",
        title: "Web Developer",
        rate: "$900 - 1200/m",
        location: "New York, USA",
        av: getJobsType.find((jt) => jt.id == 1)!,
        company: getCompanies.find((c) => c.id == 1)!,
    },
    {
        id: "c967272d-557c-4e3c-bd0f-744d61571f1d",
        timestamp: "2025-09-14 23:23",
        title: "Mobile Developer",
        rate: "$400 - 5000/m",
        location: "San Francisco, USA",
        av: getJobsType.find((jt) => jt.id == 2)!,
        company: getCompanies.find((c) => c.id == 2)!,
    },
    {
        id: "1709ba99-6ad0-4279-97e6-40a73cada108",
        timestamp: "2025-09-14 23:24",
        title: "Business Associate",
        rate: "$400 - 600/m",
        location: "Chicago, USA",
        av: getJobsType.find((jt) => jt.id == 2)!,
        company: getCompanies.find((c) => c.id == 3)!,
    },
    {
        id: "6f0b3044-c372-45dc-a39a-fa09637a6041",
        timestamp: "2025-09-14 23:26",
        title: "Digital Marketing",
        rate: "$900 - 1400/m",
        location: "Los Angeles, USA",
        av: getJobsType.find((jt) => jt.id == 1)!,
        company: getCompanies.find((c) => c.id == 4)!,
    },
    {
        id: "0574ca8d-a770-4390-a7fe-e4339e0985f3",
        timestamp: "2025-09-14 23:28",
        title: "User Experience",
        rate: "$400 - 600/m",
        location: "Austin, USA",
        av: getJobsType.find((jt) => jt.id == 2)!,
        company: getCompanies.find((c) => c.id == 5)!,
    },
];
