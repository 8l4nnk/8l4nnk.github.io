// Skills — 이것만 여기서 관리 (나머지는 src/content/ 폴더의 .md 파일)

export interface SkillGroup {
	category: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{
		category: "Offensive Security",
		items: ["Web App Pentesting", "System Hacking", "Reverse Engineering"],
	},
	{
		category: "Languages",
		items: ["Python", "C", "C++"],
	},
];
