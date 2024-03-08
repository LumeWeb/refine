"use client"

// src/get-trace.ts
import ErrorStackParser from "error-stack-parser";

// src/clean-stack.ts
var unrelatedFunctionName = "renderWithHooks";
var cleanStack = (stack) => {
  const firstUnrelatedIndex = stack.findIndex(
    (frame) => frame.functionName === unrelatedFunctionName
  );
  if (firstUnrelatedIndex !== -1) {
    return stack.slice(0, firstUnrelatedIndex);
  }
  return stack;
};

// src/constants.ts
var REFINE_PACKAGE_FILEPATH_REGEXP = process.env.NODE_ENV !== "development" ? /node_modules\/refinedev\/(?<name>.*?)\// : /\/refine\/packages\/(?<name>.*?)\//;

// src/is-refine-stack.ts
var isRefineStack = (filename) => {
  if (!filename)
    return false;
  const match = filename.match(REFINE_PACKAGE_FILEPATH_REGEXP);
  return !!match;
};

// src/get-package-name-from-filename.ts
var getPackageNameFromFilename = (filename) => {
  var _a;
  if (!filename)
    return;
  const match = filename.match(REFINE_PACKAGE_FILEPATH_REGEXP);
  const name = (_a = match == null ? void 0 : match.groups) == null ? void 0 : _a.name;
  if (!name)
    return;
  return `@refinedev/${name}`;
};

// src/get-trace.ts
function getTrace() {
  if (process.env.NODE_ENV !== "development") {
    return [];
  }
  try {
    const error = new Error();
    const stack = ErrorStackParser.parse(error);
    const clean = cleanStack(stack);
    const traces = clean.map(
      (frame) => ({
        file: frame.fileName,
        line: frame.lineNumber,
        column: frame.columnNumber,
        function: frame.functionName,
        isRefine: isRefineStack(frame.fileName),
        packageName: getPackageNameFromFilename(frame.fileName)
      })
    ).filter((trace) => trace.function);
    return traces.slice(1);
  } catch (error) {
    return [];
  }
}

// src/get-resource-path.ts
import {
  scopes
} from "@refinedev/devtools-shared";
var getResourcePath = (hookName, legacyKey) => {
  if (scopes[hookName] === "auth") {
    return null;
  }
  if (hookName === "useCan") {
    if (legacyKey) {
      return "key[1].resource";
    }
    return "key[1]";
  }
  if (scopes[hookName] === "audit-log") {
    if (hookName === "useLog") {
      return "variables.resource";
    }
    return "key[1]";
  }
  if (scopes[hookName] === "data") {
    if (hookName === "useCustom" || hookName === "useCustomMutation") {
      return null;
    }
    switch (hookName) {
      case "useList":
      case "useInfiniteList":
      case "useOne":
      case "useMany":
        if (legacyKey) {
          return "key[1]";
        }
        return "key[2]";
      case "useCreate":
      case "useCreateMany":
      case "useDelete":
      case "useDeleteMany":
      case "useUpdate":
      case "useUpdateMany":
        return "variables.resource";
    }
  }
  return null;
};

// src/get-xray.ts
function getXRay(hookName, legacyKey) {
  if (process.env.NODE_ENV !== "development") {
    return {
      hookName: "",
      trace: [],
      resourcePath: null,
      legacyKey: false
    };
  }
  const trace = getTrace().slice(1);
  const resourcePath = getResourcePath(hookName, legacyKey);
  return {
    hookName,
    trace,
    resourcePath,
    legacyKey
  };
}

// src/use-query-subscription.tsx
import { DevToolsContext } from "@refinedev/devtools-shared";
import React, { useContext } from "react";

// src/listeners.ts
import { DevtoolsEvent as DevtoolsEvent2, send } from "@refinedev/devtools-shared";

// src/create-identifier.ts
var createIdentifier = (key, trace) => {
  const simpleTrace = trace == null ? void 0 : trace.map(
    (t) => `${t.file}:${t.line}:${t.column}#${t.function}-${t.packageName}-${t.isRefine ? 1 : 0}`
  );
  const str = JSON.stringify([...key ?? [], ...simpleTrace ?? []]);
  return str;
};

// src/listeners.ts
var createMutationListener = (ws) => (mutation) => {
  var _a;
  if (!((_a = mutation == null ? void 0 : mutation.meta) == null ? void 0 : _a.trace))
    return;
  const meta = mutation == null ? void 0 : mutation.meta;
  new Promise((resolve) => {
    var _a2, _b;
    send(ws, DevtoolsEvent2.ACTIVITY, {
      type: "mutation",
      identifier: createIdentifier(
        mutation == null ? void 0 : mutation.options.mutationKey,
        (_a2 = mutation == null ? void 0 : mutation.meta) == null ? void 0 : _a2.trace
      ),
      key: mutation == null ? void 0 : mutation.options.mutationKey,
      status: mutation == null ? void 0 : mutation.state.status,
      state: mutation == null ? void 0 : mutation.state,
      variables: (_b = mutation == null ? void 0 : mutation.state) == null ? void 0 : _b.variables,
      ...meta
    });
    resolve();
  });
};
var createQueryListener = (ws) => (query) => {
  var _a;
  if (!((_a = query == null ? void 0 : query.meta) == null ? void 0 : _a.trace))
    return;
  const meta = query == null ? void 0 : query.meta;
  new Promise((resolve) => {
    var _a2;
    send(ws, DevtoolsEvent2.ACTIVITY, {
      type: "query",
      identifier: createIdentifier(query.queryKey, (_a2 = query.meta) == null ? void 0 : _a2.trace),
      key: query.queryKey,
      status: query.state.status,
      state: query.state,
      ...meta
    });
    resolve();
  });
};

// src/use-query-subscription.tsx
var useQuerySubscription = process.env.NODE_ENV !== "development" ? () => ({}) : (queryClient) => {
  const { ws } = useContext(DevToolsContext);
  const queryCacheSubscription = React.useRef();
  const mutationCacheSubscription = React.useRef();
  React.useEffect(() => {
    if (!ws)
      return () => 0;
    const queryCache = queryClient.getQueryCache();
    const queryListener = createQueryListener(ws);
    queryCache.getAll().forEach(queryListener);
    queryCacheSubscription.current = queryCache.subscribe(
      ({ query, type }) => (type === "added" || type === "updated") && queryListener(query)
    );
    return () => {
      var _a;
      (_a = queryCacheSubscription.current) == null ? void 0 : _a.call(queryCacheSubscription);
    };
  }, [ws, queryClient]);
  React.useEffect(() => {
    if (!ws)
      return () => 0;
    const mutationCache = queryClient.getMutationCache();
    const mutationListener = createMutationListener(ws);
    mutationCache.getAll().forEach(mutationListener);
    mutationCacheSubscription.current = mutationCache.subscribe(
      ({ mutation, type }) => (type === "added" || type === "updated") && mutationListener(mutation)
    );
    return () => {
      var _a;
      (_a = mutationCacheSubscription.current) == null ? void 0 : _a.call(mutationCacheSubscription);
    };
  }, [ws, queryClient]);
  return {};
};
export {
  getTrace,
  getXRay,
  useQuerySubscription
};
//# sourceMappingURL=index.mjs.map