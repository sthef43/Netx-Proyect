import { posts } from "@/app/lib/placeholder-data";
import Component from "@/app/ui/components/posts/Post";

export default function Page() {
    return (
        <main className="px-2">
            <h2>Posts</h2>
            <section className="flex flex-row flex-wrap gap-x-4">
                {posts.map((elementos) => (
                    <Component key={elementos.id} {...elementos} />
                ))}
            </section>
        </main>
    )
}