import React from 'react'
import './showcase.css'
import { Athlete } from '../../../../shared/types/athlete'
import PhotoA from '../../assets/athleteA.jpg'
import PhotoB from '../../assets/athleteB.jpeg'
import PhotoC from '../../assets/athleteC.webp'

export default function ShowCase() {
  // Example data; athelete data will be moved to another place in frontend or we are doing backend stuff. This would be easy backend and could made the admin page for ceo
  const athletes: Athlete[] = [
    {
      photoUrl: PhotoA,
      name: 'John Doe',
      sport: 'Basketball',
      position: 'Forward',
      gradeLevel: '11th'
    },
    {
      photoUrl: PhotoB,
      name: 'Jane Smith',
      sport: 'Soccer',
      position: 'Midfielder',
      gradeLevel: '10th'
    },
    {
      photoUrl: PhotoC,
      name: 'Mike Johnson',
      sport: 'Baseball',
      position: 'Pitcher',
      gradeLevel: '12th'
    },
    // More athletes would go here
  ]

  return (
    <div className="showcase-container">
      {athletes.map((athlete, index) => (
        <div className="showcase-card" key={index}>
          <img src={athlete.photoUrl} alt={athlete.name} className="showcase-photo" />
          <h2>{athlete.name}</h2>
          <p>Sport: {athlete.sport}</p>
          <p>Position: {athlete.position}</p>
          <p>Grade: {athlete.gradeLevel}</p>
        </div>
      ))}
    </div>
  )
}
