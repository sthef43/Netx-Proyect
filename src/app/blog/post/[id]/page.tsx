import { posts } from "@/app/lib/placeholder-data";
import Component from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params:  { id: string }}) {
    const postUnico = posts.find((elementos) => elementos.id === params.id)

    return(
        <main>
            <h1>Post unitario</h1>
            <Component {...postUnico}/>
        </main>
    )
}