import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'; // libreria
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack'
import type { Configuration } from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './buildTypes';

type Mode = 'production' | 'development';
 
 
export function buildWebpack(options: IBuildOptions): webpack.Configuration {
    const {path, mode} = options;
    const isDev = mode === 'development';
    const config: webpack.Configuration = {
        entry: path.entry,
        output: {
            // path: path.resolve(__dirname, 'dist'), 
            path: path.output,
            filename: '[name].[contenthash].js', // contenthash - хэш из содержимого файла и добавляет в название
            clean: true, // перед сборкой, отчищает файлы
        },
        mode: options.mode ?? 'development', // нужно для скорости сборки, для prodaction - максимально сжатый код
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
          },
          resolve: buildResolvers(options),
          devtool: isDev && 'inline-source-map',
          devServer: isDev ? buildDevServer(options) : undefined
    }
    return config;
}