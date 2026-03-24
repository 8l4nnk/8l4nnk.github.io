// ============================================================
// 포트폴리오 데이터 — 이 파일만 수정하면 사이트가 업데이트됩니다.
// ============================================================

// ---- 취약점 제보 (CVE) ----

export type Severity = "Critical" | "High" | "Medium" | "Low" | "Info";
export type DisclosureStatus = "Published" | "Fixed" | "Reserved" | "Pending";

export interface Disclosure {
	id: string;
	title: string;
	vendor: string;
	severity: Severity;
	date: string;
	description: string;
	url?: string;
	status: DisclosureStatus;
}

export const disclosures: Disclosure[] = [
	{
		id: "CVE-2026-33618",
		title: "",
		vendor: "",
		severity: "Critical",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33704",
		title: "",
		vendor: "",
		severity: "Critical",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33706",
		title: "",
		vendor: "",
		severity: "High",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33736",
		title: "",
		vendor: "",
		severity: "High",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33737",
		title: "",
		vendor: "",
		severity: "High",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33708",
		title: "",
		vendor: "",
		severity: "Medium",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33710",
		title: "",
		vendor: "",
		severity: "Medium",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33705",
		title: "",
		vendor: "",
		severity: "Medium",
		date: "2026",
		description: "",
		status: "Reserved",
	},
	{
		id: "CVE-2026-33707",
		title: "",
		vendor: "",
		severity: "Medium",
		date: "2026",
		description: "",
		status: "Reserved",
	},
];

// ---- 경력 & 활동 ----

export type ExperienceType = "career" | "activity";

export interface Experience {
	type: ExperienceType;
	organization: string;
	role: string;
	period: string;
	description: string;
	highlights: string[];
}

export const experience: Experience[] = [
	{
		type: "career",
		organization: "HSPACE Knights",
		role: "학술팀",
		period: "2025.03 — 현재",
		description: "",
		highlights: [],
	},
	{
		type: "career",
		organization: "(주)OOO",
		role: "모바일 취약점 연구기업 인턴",
		period: "2024.07 — 2024.08",
		description: "모바일 애플리케이션 취약점 분석 및 연구 업무 수행",
		highlights: [],
	},
	{
		type: "activity",
		organization: "한세사이버고등학교 정보보안실무 강의",
		role: "강사",
		period: "2025.08.05",
		description: "",
		highlights: [],
	},
	{
		type: "activity",
		organization: "서울시립대학교 보안소모임 SHA",
		role: "멤버",
		period: "2024.03 — 현재",
		description: "",
		highlights: [],
	},
];

// ---- 실적 (Achievements) ----

export type AchievementType =
	| "CTF"
	| "Competition"
	| "Certification"
	| "Award"
	| "Publication"
	| "Other";

export interface Achievement {
	title: string;
	type: AchievementType;
	date: string;
	description: string;
	url?: string;
}

export const achievements: Achievement[] = [
	{
		title: "ENKI RedTeam CTF 2위",
		type: "CTF",
		date: "2026.03.22",
		description: "",
	},
	{
		title: "SUCTF 2위",
		type: "CTF",
		date: "2026.03.16",
		description: "Team dda_com",
	},
	{
		title: "Dice CTF — open division 4위 / global 5위",
		type: "CTF",
		date: "2026.03.08",
		description: "Team dda.com",
	},
	{
		title: "BITSCTF 1위",
		type: "CTF",
		date: "2026.02.22",
		description: "Team 따따",
	},
	{
		title: "한양대학교 해킹방어대회 2위 — 한국정보처리학회장상",
		type: "CTF",
		date: "2026.02.09",
		description: "Team 손이시립대",
	},
	{
		title: "Blackhat MEA 2025 Final",
		type: "CTF",
		date: "2025.12.02",
		description: "Team Runar",
	},
	{
		title: "Autohack 2025 자동차해킹방어대회 — 부산시장상",
		type: "CTF",
		date: "2025.11.28",
		description: "Team Runa",
	},
	{
		title: "LISA-thon 우수상",
		type: "CTF",
		date: "2025.11.23",
		description: "Team Runa",
	},
	{
		title: "Hacksium 2025 Final 7위",
		type: "CTF",
		date: "2025.07.17",
		description: "Team bbangnoobies",
	},
	{
		title: "AI TOP 100 Final",
		type: "Competition",
		date: "2026.03.14",
		description: "",
	},
];

// ---- 기술 스택 (Skills) ----

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
