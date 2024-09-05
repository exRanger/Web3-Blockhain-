import type { Configuration } from "webpack-dev-server";
import { IBuildOptions } from "./buildTypes";

export function buildDevServer(options: IBuildOptions): Configuration {
    return {
        port: options.port,
        open: true
    };
}