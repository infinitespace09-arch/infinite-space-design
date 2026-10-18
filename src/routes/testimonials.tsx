import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/testimonials")({ beforeLoad: () => { throw redirect({ to: "/process", statusCode: 301 }); } });
