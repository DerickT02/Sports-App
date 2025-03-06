export interface Athlete {
    /** URL or path to the athlete's portrait image */
    photoUrl: string
  
    /** Athlete's full name */
    name: string
  
    /** Primary sport (e.g., "Basketball", "Soccer") */
    sport: string
  
    /** Position within the sport (e.g., "Forward", "Pitcher") */
    position: string
  
    /** Athlete's grade level (e.g., "10th", "11th", "12th") */
    gradeLevel: string
  }