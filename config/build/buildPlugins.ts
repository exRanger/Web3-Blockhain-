import { Configuration } from "mini-css-extract-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'; 
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {IBuildOptions} from './buildTypes'

const MODE_DEV = 'development';

/**
 * @param options 
 * @returns Configuration['plugin']
 * @author exRanger Zagirov I.Z.
 */
export function buildPlugins(options: IBuildOptions): Configuration['plugins'] {
    const isDev = options.mode = MODE_DEV;

    // FIXME: if many count of plugins - tranfser in block "if"
    // if(isDev) {

    // }

    return [
        new HtmlWebpackPlugin({
            template: options.path.html
        }),
        isDev && new webpack.ProgressPlugin(),
        new Dotenv(),
        // no dev - production mode
        !isDev && new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css",
        })
    ].filter(Boolean)
}