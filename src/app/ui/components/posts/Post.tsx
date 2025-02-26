import Link from 'next/link';
import React, { JSX } from 'react';

export default function Component({ id, title, content, date, user }: { id?: string, title?: string, content?: string, date?: string, user?: string }) {
    return (
        <div key={id} className="border w-[24%] border-gray-400 p-4 my-4 shadow-md rounded-md">
            <Link href={`/blog/post/${id}`} className='text-blue-800'><h2 className='underline underline-offset-2 hover:text-red-700 font-semibold transition-all'>{title}</h2></Link>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
        </div>
    );
}

