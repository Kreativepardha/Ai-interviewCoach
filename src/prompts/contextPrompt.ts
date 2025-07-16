export const generateContextPrompt = (resumeText: string, jobDescription: string, role: string): string => {
  return `
Candidate is applying for a ${role} role.

Resume:
${resumeText}

Job Description:
${jobDescription}

Generate 3 tailored questions that assess skills, mindset, and domain knowledge. Avoid generic questions.
`;
};
