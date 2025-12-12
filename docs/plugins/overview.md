# Plugin system

NovaCMS provides a plugin SDK for backend extensions and (in the future) admin UI injections.

## Goals
- Versioned, capability-based plugins
- Lifecycle hooks (bootstrap/shutdown and content events)
- Clear boundaries (plugins don't get implicit access to secrets)

## Current state (1.0.0)
- Interfaces and lifecycle hook types are defined in `@novacms/plugin-sdk`.
- Host-side registration is a placeholder and will evolve as the core matures.
