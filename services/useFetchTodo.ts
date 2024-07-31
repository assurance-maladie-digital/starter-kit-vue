import axios from '@/utils/axios';

export default function  useTodoFetch(id: string) {
	return useAsyncData(`todos/${id}`,
		() => axios.get(`todos/${id}`)
			.then((res) => res.data)
	);
}
