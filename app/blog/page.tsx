import { client } from '@/sanity/client'


export default async function BlogPage(){

    const posts = await client.fetch(`*[_type == "post"]`, {}, { next: { revalidate: 60 } })

    return (
        <main>
            <h1>Blogs</h1>
            {posts.map((post:{_id:string,title:string,slug:{current:string}})=>(
                <><h2>{post.title}</h2><p>{post.slug.current}</p></>
            ))}
        </main>
    )
}