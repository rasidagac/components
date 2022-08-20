import React from "react";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import './style/App.css';

const App = () => {
	return (
		<div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning?</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.fullName()}
					timeAgo="Today at 2:00AM"
					content={faker.lorem.sentence()}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.fullName()}
          timeAgo="Today at 2:00AM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
			<ApprovalCard>
        <CommentDetail
          author={faker.name.fullName()}
          timeAgo="Yesterday at 10:45PM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
		</div>
	);
};

const root = createRoot(document.querySelector("#root"));
root.render(<App tab="Home" />);
