import { Configuration } from "webpack";
import { IBuildOptions } from "./buildTypes";

export function buildResolvers(options: IBuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}