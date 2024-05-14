const LoginBody = z.object({
  username: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (event) => {
  console.log(z.getErrorMap());
  const body = await readValidatedBody(event, LoginBody.parse);
  return body;
});
