
import Image from 'next/image'




export default async function Home() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users/1',{
    next:{revalidate:20}
  })
  const data = await res.json()

    return (
      

       <main style={{ padding: '2rem' }}>                                                   

      
       
      <h1>CDN Performance Demo</h1>                                                      
      <p>Profile: {data.name}</p>                                                        
      <Image                                                                             
        src="https://picsum.photos/800/400"                                              
        alt="Demo hero image"                                                            
        width={800}                                                                      
        height={400}                                                                     
        priority                                                                         
      />                                                                                 
    </main>                                                                                          
    )                                                                                
  }   