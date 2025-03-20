export interface Athlete { 
  baseInformation: {
    photoUrl: string  // URL or path to the athlete's portrait image 
    name: string  // Athlete's full name
    sport: string // Primary sport (e.g., "Basketball", "Soccer")
    position: string  // Position within the sport (e.g., "Forward", "Pitcher")
    gradeLevel: string  // Athlete's grade level (e.g., "10th", "11th", "12th")
    
  },
  portfolio: {
    activeComponents: [], // Custon jsx object
    componentInformation: [] // Custom
  }
    
  
  }