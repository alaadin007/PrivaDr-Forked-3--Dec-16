export const ENV = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  API_URL: process.env.NEXT_PUBLIC_API_URL,
} as const;

export function validateEnv() {
  const requiredEnvVars = [
    'OPENAI_API_KEY',
    'ANTHROPIC_API_KEY',
    'NEXT_PUBLIC_API_URL'
  ];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
}