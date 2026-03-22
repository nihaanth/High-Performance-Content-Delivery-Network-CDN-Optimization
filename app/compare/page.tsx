import Image from 'next/image' 

async function getOptimizied(){

   const res = await fetch('https://jsonplaceholder.typicode.com/photos/1', {                
      next: { revalidate: 60 }                                                                
    }) 
    const data = await res.json()
    return data
}

async function getunOptimizied(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/2', {  
        cache:'no-store'
    })
    const data = await res.json()
    return data
}

                                                                      
            

export default async function ComparePage(){
  const optimized = await getOptimizied()
  const unoptimized = await getunOptimizied()
    return(
       <main className="overflow-hidden">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '32px', background: 'black', color: 'white', minHeight: '100vh' }}>     

            {/* Unoptimized panel */}
            <div className="border border-red-500/30 rounded-2xl p-6">
            <h2 className="text-red-400 font-bold mb-4">Unoptimized</h2>
            <img src="https://picsum.photos/seed/2/600/400" alt="unoptimized"
  className="w-full rounded-lg" />
  <p className="mt-3 text-sm text-white/60">{unoptimized.title}</p>
            </div>

            {/* Optimized panel */}
            <div className="border border-green-500/30 rounded-2xl p-6">
            <h2 className="text-green-400 font-bold mb-4">Optimized</h2>
             <Image src={`https://picsum.photos/seed/${optimized.id}/600/400`}                  
    alt="optimized" width={600}height={400} priority  className="w-full rounded-lg"/>           
  <p className="mt-3 text-sm text-white/60">{optimized.title}</p>
            </div>

        </div>
        </main>
    )
}