export interface Education {
    degree: string; // e.g., "Bachelor of Science in Computer Engineering"
    institution: string;
    startDate: Date;
    endDate: Date;
    grade?: string; // e.g., GPA or grade, if applicable
    achievements?: string[]; // List of notable achievements
}