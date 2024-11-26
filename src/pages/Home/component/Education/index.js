import React from "react";
import { Education } from "../../../../data/data";

import {
	StyledHomeEducation,
	StyledHomeEducationArticle,
	StyledHomeEducationSection,
} from "./styles";

const index = () => {
	return (
		<StyledHomeEducation>
			<h2>My Education & Experience</h2>
			<StyledHomeEducationSection>
				<StyledHomeEducationArticle>
					<header> 2018 - 2019 </header>
					<ul>
						{Education.first_part.map(
							({ title, caption }, index) => (
								<li key={index}>
									<span>{title}</span>
									<p>{caption}</p>
								</li>
							)
						)}
					</ul>
				</StyledHomeEducationArticle>
				<StyledHomeEducationArticle>
					<header> 2019 - 2020</header>
					<ul>
						{Education.secound_part.map(
							({ title, caption }, index) => (
								<li key={index}>
									<span>{title}</span>
									<p>{caption}</p>
								</li>
							)
						)}
					</ul>
				</StyledHomeEducationArticle>
				<StyledHomeEducationArticle>
					<header> 2020 - 2021 </header>
					<ul>
						{Education.third_part.map(
							({ title, caption }, index) => (
								<li key={index}>
									<span>{title}</span>
									<p>{caption}</p>
								</li>
							)
						)}
					</ul>
				</StyledHomeEducationArticle>
			</StyledHomeEducationSection>
		</StyledHomeEducation>
	);
};

export default index;
