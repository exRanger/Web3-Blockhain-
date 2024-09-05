import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from "./buildTypes";

const MODE_DEV = 'development';

/**
 * @description Get all loaders from buildLoaders
 * @author Zagirov I.
 * @public
 */
const SASS_LOADER =  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // NOTE: Conditionally add -> MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
};

const TS_LOADER = {
    test: /\.tsx?$/,
    // ts loader can works with JSX
    // if not - use babel/babelloader
    use: 'ts-loader',
    exclude: /node_modules/,
}

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === MODE_DEV;
    if(!isDev) {
        SASS_LOADER.use.push(
            MiniCssExtractPlugin.loader
        )
    }
    return [
        SASS_LOADER, // order 1
        TS_LOADER // order 2
    ]
}