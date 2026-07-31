import Image from "next/image";
import { SmartLink } from "@/components/shared/SmartLink";
import { label } from "@/lib/classes";
import { getBlogArticlePath } from "../data/blogArticles";

type ArticleData = {
	author: string;
	category: string;
	curatedFeatured?: boolean;
	date: string;
	description: string;
	image: string;
	readTime: string;
	slug: string;
	title: string;
};

type BlogArticleMetaProps = {
	article: ArticleData;
	dark?: boolean;
};

export function BlogArticleMeta({
	article,
	dark = false,
}: BlogArticleMetaProps) {
	return (
		<div
			className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] ${
				dark ? "text-white/52" : "text-muted"
			}`}
		>
			<span>{article.date}</span>
			<span aria-hidden="true">/</span>
			<span>{article.readTime}</span>
		</div>
	);
}

type BlogArticleCardProps = {
	article: ArticleData;
};

export function BlogArticleCard({ article }: BlogArticleCardProps) {
	return (
		<SmartLink
			className="group grid content-start gap-5"
			href={getBlogArticlePath(article.slug)}
		>
			<div className="relative aspect-video overflow-hidden bg-surface">
				<Image
					alt={article.title}
					className="object-cover transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] motion-reduce:transition-none"
					fill
					sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
					src={article.image}
				/>
			</div>

			<div className="grid min-h-[230px] content-start gap-4">
				<span className={`${label} text-dl-blue`}>{article.category}</span>
				<h3 className="min-h-[3.8rem] w-full overflow-hidden text-[clamp(1.42rem,1.68vw,1.78rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-ink transition [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] group-hover:text-dl-blue">
					{article.title}
				</h3>
				<p className="min-h-[3.05rem] w-full overflow-hidden text-[15px] leading-[1.52] text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
					{article.description}
				</p>
				<div className="mt-auto pt-2">
					<BlogArticleMeta article={article} />
				</div>
			</div>
		</SmartLink>
	);
}
