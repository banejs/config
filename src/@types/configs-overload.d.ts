declare module 'configs-overload' {
    export interface IConfigsOverloadOptions {
        defaultEnv?: string;
        env?: string;
    }

    export interface IConfig {
        [key: string]: any;
    }

    export default function<T = IConfig>(configsDirectory?: string, options?: IConfigsOverloadOptions): T;
}
