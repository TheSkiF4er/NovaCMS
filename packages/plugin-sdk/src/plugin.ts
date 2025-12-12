export interface NovaPluginMeta {
  name: string;
  version: string;
  description?: string;
  author?: string;
}

export interface NovaPlugin {
  meta: NovaPluginMeta;

  /**
   * Called when the plugin is registered by the host application.
   */
  register(ctx: PluginContext): void | Promise<void>;
}

export interface PluginContext {
  log: (msg: string, data?: unknown) => void;
  // future: db, config, webhook registrar, admin UI injections...
}
