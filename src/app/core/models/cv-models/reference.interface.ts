export interface Reference {
    name: string;            // Full name of the reference
    position: string;        // Job title or position of the reference
    company: string;         // Company where the reference works
    email?: string;          // Contact email of the reference (optional)
    phone?: string;          // Contact phone number of the reference (optional)
    relationship?: string;   // Relationship to the candidate, e.g., "Former Manager"
    description?: string;    // Optional description or note, e.g., "Worked together on multiple projects"
}