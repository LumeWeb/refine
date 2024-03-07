"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DevToolsContext: () => DevToolsContext,
  DevToolsContextProvider: () => DevToolsContextProvider,
  DevtoolsEvent: () => DevtoolsEvent,
  hooksByScope: () => hooksByScope,
  receive: () => receive,
  scopes: () => scopes,
  send: () => send
});
module.exports = __toCommonJS(src_exports);

// src/event-types.ts
var DevtoolsEvent = /* @__PURE__ */ ((DevtoolsEvent2) => {
  DevtoolsEvent2["RELOAD"] = "devtools:reload";
  DevtoolsEvent2["DEVTOOLS_INIT"] = "devtools:init";
  DevtoolsEvent2["DEVTOOLS_HANDSHAKE"] = "devtools:handshake";
  DevtoolsEvent2["DEVTOOLS_ALREADY_CONNECTED"] = "devtools:already-connected";
  DevtoolsEvent2["ACTIVITY"] = "devtools:send-activity";
  DevtoolsEvent2["DEVTOOLS_ACTIVITY_UPDATE"] = "devtools:activity-update";
  DevtoolsEvent2["DEVTOOLS_CONNECTED_APP"] = "devtools:connected-app";
  DevtoolsEvent2["DEVTOOLS_DISCONNECTED_APP"] = "devtools:disconnected-app";
  DevtoolsEvent2["DEVTOOLS_HIGHLIGHT_IN_MONITOR"] = "devtools:highlight-in-monitor";
  DevtoolsEvent2["DEVTOOLS_HIGHLIGHT_IN_MONITOR_ACTION"] = "devtools:highlight-in-monitor-action";
  DevtoolsEvent2["DEVTOOLS_LOGIN_SUCCESS"] = "devtools:login-success";
  DevtoolsEvent2["DEVTOOLS_RELOAD_AFTER_LOGIN"] = "devtools:reload-after-login";
  return DevtoolsEvent2;
})(DevtoolsEvent || {});

// src/scopes.ts
var scopes = {
  useCan: "access-control",
  useLog: "audit-log",
  useLogList: "audit-log",
  useCreate: "data",
  useCreateMany: "data",
  useCustom: "data",
  useCustomMutation: "data",
  useDelete: "data",
  useDeleteMany: "data",
  useInfiniteList: "data",
  useList: "data",
  useMany: "data",
  useOne: "data",
  useUpdate: "data",
  useUpdateMany: "data",
  useForgotPassword: "auth",
  useGetIdentity: "auth",
  useIsAuthenticated: "auth",
  useLogin: "auth",
  useLogout: "auth",
  useOnError: "auth",
  usePermissions: "auth",
  useRegister: "auth",
  useUpdatePassword: "auth"
};
var hooksByScope = Object.entries(scopes).reduce(
  (acc, [hook, scope]) => {
    if (!acc[scope]) {
      acc[scope] = [];
    }
    acc[scope].push(hook);
    return acc;
  },
  {}
);

// src/context.tsx
var import_react = __toESM(require("react"), 1);

// src/send.ts
async function send(ws, event, payload) {
  if (ws.readyState !== ws.OPEN) {
    await new Promise((resolve) => {
      const listener = () => {
        ws.send(JSON.stringify({ event, payload }));
        resolve();
        ws.removeEventListener("open", listener);
      };
      ws.addEventListener("open", listener);
    });
    return;
  }
  ws.send(JSON.stringify({ event, payload }));
  return;
}

// src/receive.ts
function receive(ws, event, callback) {
  const listener = (e) => {
    const { event: receivedEvent, payload } = JSON.parse(e.data);
    if (event === receivedEvent) {
      callback(payload);
    }
  };
  ws.addEventListener("message", listener);
  return () => {
    ws.removeEventListener("message", listener);
  };
}

// src/context.tsx
var DevToolsContext = import_react.default.createContext({
  __devtools: false,
  port: 5002,
  url: "localhost",
  secure: false,
  ws: null
});
var DevToolsContextProvider = ({
  __devtools,
  port,
  children
}) => {
  const [values, setValues] = import_react.default.useState({
    __devtools: __devtools ?? false,
    port: port ?? 5002,
    url: "localhost",
    secure: false,
    ws: null
  });
  const [ws, setWs] = import_react.default.useState(null);
  import_react.default.useEffect(() => {
    const wsInstance = new WebSocket(
      `${values.secure ? "wss" : "ws"}://localhost:${values.port}`
    );
    const unsubscribe = receive(
      wsInstance,
      "devtools:handshake" /* DEVTOOLS_HANDSHAKE */,
      (data) => {
        setValues((v) => ({
          ...v,
          devtoolsUrl: data.url
        }));
        unsubscribe();
      }
    );
    wsInstance.addEventListener("open", () => {
      if (!values.__devtools) {
        send(wsInstance, "devtools:init" /* DEVTOOLS_INIT */, {
          url: window.location.origin
        });
      }
    });
    setWs(wsInstance);
    return () => {
      unsubscribe();
      wsInstance.close(1e3, window.location.origin);
    };
  }, []);
  const contextValues = import_react.default.useMemo(
    () => ({
      ...values,
      ws
    }),
    [values, ws]
  );
  return /* @__PURE__ */ import_react.default.createElement(DevToolsContext.Provider, { value: contextValues }, children);
};
//# sourceMappingURL=index.js.map