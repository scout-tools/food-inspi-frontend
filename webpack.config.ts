import CompressionPlugin from 'compression-webpack-plugin';
import * as webpack from 'webpack';
import * as zlib from 'zlib';

export default {
  plugins: [
    new CompressionPlugin({ algorithm: 'gzip', filename: '[path][base].gz' }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      filename: '[path][base].br',
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY
        }
      } as zlib.BrotliOptions
    })
  ]
} as webpack.Configuration;
