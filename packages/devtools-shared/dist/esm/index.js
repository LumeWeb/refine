"use client"

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
import React from "react";

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
var DevToolsContext = React.createContext({
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
  const [values, setValues] = React.useState({
    __devtools: __devtools ?? false,
    port: port ?? 5002,
    url: "localhost",
    secure: false,
    ws: null
  });
  const [ws, setWs] = React.useState(null);
  React.useEffect(() => {
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
  const contextValues = React.useMemo(
    () => ({
      ...values,
      ws
    }),
    [values, ws]
  );
  return /* @__PURE__ */ React.createElement(DevToolsContext.Provider, { value: contextValues }, children);
};
export {
  DevToolsContext,
  DevToolsContextProvider,
  DevtoolsEvent,
  hooksByScope,
  receive,
  scopes,
  send
};
//# sourceMappingURL=index.js.map