import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

// Experimental(you could just use process.env.PORT)
const PORT: number = Number(Bun.env.PORT || 3000);

const app: Elysia = new Elysia()
	.use(swagger())
	.get("/", () => "Hello Elysia")
	.listen(PORT);
console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}\nDocumentation available at http://localhost:3000/swagger`,
);
