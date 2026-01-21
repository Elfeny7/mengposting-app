import { Post } from './feed.type';

const DUMMY_POSTS: Post[] = [
    { id: 1, author: 'Ikmal Faris', title: 'Cihuy', content: 'Halo dunia', time: '5 jam lalu' },
    { id: 2, author: 'Ikmal Faris', title: 'Perkodingan', content: 'Ngodeng', time: '2 jam lalu' },
    { id: 3, author: 'Ikmal Faris', title: 'Xiaomi', content: 'Hape Xiaomi gasss', time: '39 menit yang lalu' },
    { id: 4, author: 'Ikmal Faris', title: 'Langit', content: 'Mendung', time: '10 menit yang lalu' },
    { id: 5, author: 'Ikmal Faris', title: 'Oi', content: 'oi', time: '5 menit yang lalu' },
    { id: 6, author: 'Ikmal Faris', title: 'Judul', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus pharetra laoreet. Cras porta eros et risus ultricies tincidunt. Praesent nisl tortor, iaculis nec ultricies at, mollis sed lacus. Sed dignissim at dolor nec consequat.', time: '1 menit yang lalu' },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPosts = async (): Promise<Post[]> => {
    await delay(800);
    return [...DUMMY_POSTS].reverse();
};

export const fetchPostById = async (id: number): Promise<Post | null> => {
    await delay(500);
    return DUMMY_POSTS.find(post => post.id === id) || null;
};