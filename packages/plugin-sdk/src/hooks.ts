export type LifecycleHook =
  | 'onBootstrap'
  | 'onShutdown'
  | 'beforeContentCreate'
  | 'afterContentCreate'
  | 'beforeContentUpdate'
  | 'afterContentUpdate';

export interface HookHandler {
  hook: LifecycleHook;
  handle: (payload: unknown) => void | Promise<void>;
}
