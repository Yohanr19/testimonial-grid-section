import React from 'react'
import data from './Data'

const Testimonials = () => {
    return (
       <>
        {data.map( (testimonial) => {
            return (
            <div key={testimonial.id} 
            className='testimonial'
            style= {{
               backgroundColor:  testimonial.backgroundColor,
               borderRadius: '11px',
               padding: '1.7rem',
               width:'100%',
               color: testimonial.textColor,
               margin: '1.5rem auto'
            }}
            >
                <div 
                className='profile'
                style= {{ 
                    display: 'flex',
                    paddingBottom: '1.3rem'
                }}>
                  <img 
                  src={testimonial.profilePicture}
                  className='profile-pic' 
                  alt={testimonial.profileName+" picture"}
                  style= {{ 
                    borderRadius: '50%'
                  }}/>
                  <div 
                  className='name-status-container'
                  style= {{
                      marginLeft: '1.3rem' ,
                      display: 'grid',
                      justifyItems: 'space-between',
                  }}> 
                      <h2 
                      className='name'
                      >{testimonial.profileName}</h2>
                      <h3 className='status'
                      style={{opacity:'0.5'}}>{testimonial.status}</h3> 
                  </div>
                </div>
                <h2 className='testimonial-intro'>{testimonial.testimonialTitle}</h2>
                <p 
                className='testimonial-quote'
                style={{
                    opacity:'0.7' ,
                    marginTop: '1.2rem'
                    }}>{testimonial.testimnonialContent} </p>
            </div>
            )
        })}
       </>
    )
}

export default Testimonials
