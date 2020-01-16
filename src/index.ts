import path from 'path';

import configsOverload from 'configs-overload';

export default configsOverload(process.env.CONFIG_DIR || path.join(process.cwd(), 'configs'), {
    defaultEnv: 'default',
    env: process.env.CONFIG_ENV || process.env.NODE_ENV
});
