# Beb
> An high abstraction API development setup with Bun, Elysia and Biome!

## Features
* Bun over Node for native Typescript support and speed.
* Elysia which feels really familiar and clear.
* Biome provides both formatting and linting in one unified package.

## Usage
I prioritazied sensible defaults and convenience while mantaining the whole thing simple.
```sh
# Development
bun dev
# Build
bun build-bundle
# Start(for production, will run the built bundle)
bun start
# Compile(bundles the Bun runtime DLL with the code in an executable)
bun build-binary
# Typecheck
bun typecheck
# Format(will format everything that makes sense, read later) 
bun format
# Lint
bun lint
```
The format command will format almost everything in the project, but Biome is set to it will ignore anything that's in `.gitignore` and any file greater then 2MB which is double the default!

It will also organize your imports, if you don't like this, you can easily change this by modifying biome.json.

Linting is using recommended settings, but is strict on unused variables and imports!

## Installation
Install [Bun](https://bun.sh/) then just:
```
git clone https://github.com/0xlover/beb
cd beb
bun install && bun dev
```

> [!NOTE]
> You could modify biome.json by adding `"formatter.useEditorConfig": true` to use an `.editorconfig` for formatting rules if you are into that.

I heard [Zod](https://zod.dev/) is good!