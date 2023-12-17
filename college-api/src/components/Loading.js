const Loading = () => {
	return (
		<div className="dark:bg-bg-dark-alt bg-bg-light-alt text-white">
			<div className="container mx-auto pt-10 pb-5 text-4">
				<h1 className="text-2 mx-auto flex items-center justify-center">
					<span class="loading loading-spinner w-20 my-10 gap-2"></span>
					Loading...
				</h1>
			</div>
		</div>
	);
};

export default Loading;