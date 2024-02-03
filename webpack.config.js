import { resolve as _resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
};
export const resolve = {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', '@mui/lab'], // Add this line
    fallback: {
        http: false,
        https: false,
        zlib: false,
        stream: false,
        util: require.resolve('util/'),
        assert: require.resolve('assert/'),
        fs: true,
        net: true,
        tls: true,
    },
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        },
    ],
};
export const devServer = {
    contentBase: _resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
};
