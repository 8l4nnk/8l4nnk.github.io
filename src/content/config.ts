import { defineCollection, z } from "astro:content";

const achievementsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		type: z.enum([
			"CTF",
			"Competition",
			"Certification",
			"Award",
			"Publication",
			"Other",
		]),
		date: z.string(),
		description: z.string().optional().default(""),
	}),
});

const disclosuresCollection = defineCollection({
	schema: z.object({
		id: z.string(),
		severity: z.enum(["Critical", "High", "Medium", "Low", "Info"]),
		status: z.enum(["Published", "Fixed", "Reserved", "Pending"]),
	}),
});

const experienceCollection = defineCollection({
	schema: z.object({
		type: z.enum(["career", "activity"]),
		organization: z.string(),
		role: z.string().optional().default(""),
		period: z.string(),
		description: z.string().optional().default(""),
		order: z.number(),
	}),
});

export const collections = {
	achievements: achievementsCollection,
	disclosures: disclosuresCollection,
	experience: experienceCollection,
};
