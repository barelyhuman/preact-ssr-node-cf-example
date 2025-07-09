import { handler } from "./handler-entry.jsx";

const serveStatic = (
    req: Request,
    env: { ASSETS: { fetch: (req: Request) => Response } },
) => {
    const og = new URL(req.url);
    const strippedUrl = og.origin + "/" +
        og.pathname.replace(/^\/assets/, "/").split("/").filter(Boolean)
            .join(
                "/",
            );
    const nextReq = new Request(
        strippedUrl,
        {
            ...req,
        },
    );
    return env.ASSETS.fetch(
        nextReq,
    );
};

export default {
    fetch: (
        req: Request,
        env: { ASSETS: { fetch: (req: Request) => Response } },
    ) => {
        const og = new URL(req.url);
        if (!og.pathname.startsWith("/assets/")) {
            return handler(req);
        }
        return serveStatic(req, env);
    },
};
