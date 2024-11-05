export interface WorkExperience {
    jobTitle: string;
    companyName: string;
    startDate: Date;
    endDate?: Date; // Can be null if still employed
    location?: string;
    responsibilities: string[]; // List of bullet points
}