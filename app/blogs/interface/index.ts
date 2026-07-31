export interface BlogArticle {
	author: string;
	category: string;
	curatedFeatured?: boolean;
	date: string;
	description: string;
	image: string;
	readTime: string;
	slug: string;
	title: string;
}

export interface BlogArticleSection {
	heading: string;
	image?: string;
	paragraphs: string[];
}
