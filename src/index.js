import React from "react";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author={faker.name.fullName()}
					timeAgo="Today at 2:00AM"
					content={faker.lorem.sentence()}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<CommentDetail
				author={faker.name.fullName()}
				timeAgo="Today at 2:00AM"
				content={faker.lorem.sentence()}
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author={faker.name.fullName()}
				timeAgo="Yesterday at 10:45PM"
				content={faker.lorem.sentence()}
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};

const root = createRoot(document.querySelector("#root"));
root.render(<App tab="Home" />);
