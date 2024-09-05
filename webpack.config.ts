import {Configuration} from 'webpack';
import path from 'path';
import {buildWebpack} from './config/build/buildWebpack';
import { IBuildPaths } from './config/build/buildTypes';

type Mode = 'production' | 'development';

interface Env {
  mode: Mode;
  port: number;
  path: string;
}

/**
 * @description Root webpack function config.
 * @author Zagirov I.
 * @public
 */
export default (env: Env): Configuration => {
  const paths: IBuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  const config: Configuration = buildWebpack({
    port: env.port,
    mode: env.mode,
    path: paths,
  });
   
  return config;
}
